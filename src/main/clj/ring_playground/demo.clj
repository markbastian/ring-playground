(ns ring-playground.demo
  (:require [integrant.core :as ig]
            [immutant.web :as immutant]
            [compojure.core :refer [routes GET]]
            [hiccup.page :refer [html5]]
            [ring.util.http-response :refer [ok content-type]]))

(defmethod ig/init-key :immutant/web-server [_ {:keys [host port handler] :as config
                                                :or {host "0.0.0.0" port 3000}}]
  (immutant/run (fn [request] ((handler config) request)) {:port port :host host}))


(defmethod ig/halt-key! :immutant/web-server [_ server]
  (immutant/stop server))

(defn handler [system]
  (fn [request]
    {:status  200
     :headers {"Content-Type" "text/html"}
     ;:body "Hello world!"
     :body    "<h2>Hello world!</h2>"}))

(defn home-page []
  (html5
    [:body
     [:div
      [:h3 "Hello World!"]]]))

(defn my-routes [handler]
  (routes
    (GET "/" [] (home-page))
    (GET "/foo" [] "Hello Foo")
    (GET "/bar" [] "Hello Bar")))

(def config {:immutant/web-server {:handler #'my-routes }})

(defonce ^:dynamic *system* nil)

(defn system [] *system*)

(defn start
  ([system] (alter-var-root system (fn [s] (if-not s (ig/init config) s))))
  ([] (start #'*system*)))

(defn stop
  ([s] (alter-var-root s (fn [s] (when s (do (ig/halt! s) nil)))))
  ([] (stop #'*system*)))

(defn restart
  ([s] (do (stop s) (start s)))
  ([] (restart #'*system*)))
