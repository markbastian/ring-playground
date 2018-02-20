(ns ring-playground.x01-ring.r07-static-resources
  (:require [immutant.web :as immutant]
            [mount.core :as mount :refer [only defstate]]
            [ring.util.response :refer [response]]
            [ring.middleware.file]
            [ring.middleware.resource :refer :all]
            [ring.middleware.content-type :refer :all]
            [ring.middleware.not-modified :refer :all]))

;https://github.com/ring-clojure/ring/wiki/Static-Resources
(defn handler [request]
  {:status 200
   :body "<img src=\"public/img/clj.png\">"})

(def app
  (-> handler
      (wrap-resource "resources")
      wrap-content-type
      wrap-not-modified))

(defstate server
          :start (immutant/run #'app {:port 3000})
          :stop (immutant/stop server))

(defn start []
  (mount/start (only #{#'server})))

(defn stop []
  (mount/stop))