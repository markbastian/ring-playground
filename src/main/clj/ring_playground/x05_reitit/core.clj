(ns ring-playground.x05-reitit.core
  (:require
    [ring-playground.ig-helper :as ig :refer [start stop restart]]
    [reitit.core :as r]
    [reitit.ring :as ring]
    [ring.util.http-response :refer [ok content-type not-found]]
    [ring.mock.request :as mock]
    [hiccup.page :refer [html5]]
    [ring.middleware.params :as params]))

(defn handler [_]
  {:status 200, :body "ok"})

(defn wrap [handler id]
  (fn [request]
    (update (handler request) :wrap (fnil conj '()) id)))

(defn home-page []
  (html5
    [:body
     [:div
      [:h3 "Hello World!"]
      [:a {:href "/api/ping"} "click"]]]))

(def routes
  ["/plain"
   ["/foo" {:get (fn [request]
                   {:status 200
                    :body   "hi"})}]
   ["/plus" {:get  (fn [{{:strs [x y]} :query-params :as req}]
                     (ok (str (+ (Long/parseLong x) (Long/parseLong y)))))
             :post (fn [{{:keys [x y]} :body-params}]
                     {:status 200
                      :body   {:total (+ x y)}})}]])

(def app
  (ring/ring-handler
    (ring/router
      [routes
       ["/" {:handler (constantly (ok (home-page)))}]
       ["/favicon.ico" (constantly (not-found))]
       ["/api" {:middleware [[wrap :api]]}
        ["/ping" {:get  handler
                  :name ::ping}]
        ["/admin" {:middleware [[wrap :admin]]}
         ["/users" {:get  handler
                    :post handler}]]]]
      {:data {:middleware [params/wrap-params]}})))



(comment
  (app (mock/request :get "/"))
  (app (mock/request :get "/api/ping"))
  (app (mock/request :get "/api/admin/users"))
  (app (mock/request :get "/plain/plus?x=2&y=3")))

(def config
  {:web/server
   {:host    "0.0.0.0"
    :port    3000
    :handler #'app}})

(defonce sys (ig/create-system config))