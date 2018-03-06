(ns ring-playground.x01-ring.r07-static-resources
  (:require [immutant.web :as immutant]
            [mount.core :as mount :refer [only defstate]]
            [hiccup.page :refer [html5]]
            [ring.util.http-response :refer [ok content-type]]
            [ring.middleware.file]
            [ring.middleware.resource :refer :all]
            [ring.middleware.content-type :refer :all]
            [ring.middleware.not-modified :refer :all]))

;https://github.com/ring-clojure/ring/wiki/Static-Resources
(defn handler [request]
  (-> (ok (html5 [:h1 "Hello Clojure!"]
                 [:img {:src "img/clj.png" :width 200 :height 200}]))
      (content-type "text/html")))

(def app
  (-> handler
      (wrap-resource "public")
      wrap-content-type
      wrap-not-modified))

(defstate server
          :start (immutant/run #'app {:port 3000})
          :stop (immutant/stop server))

(defn start []
  (mount/start (only #{#'server})))

(defn stop []
  (mount/stop))