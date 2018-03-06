(ns ring-playground.x03-bidi.core
  (:require [bidi.ring :refer (make-handler)]
            [mount.core :as mount :refer [only defstate]]
            [ring.util.response :as res]
            [immutant.web :as immutant]
            [mount.core :as mount]))

(defn index-handler
  [request]
  (res/response "Homepage"))

(defn article-handler
  [{:keys [route-params]}]
  (res/response (str "You are viewing article: " (:id route-params))))

(def app
  (make-handler ["/" {"index.html" index-handler
                      ["articles/" :id "/article.html"] article-handler}]))

(defstate server
          :start (immutant/run #'app {:port 3000})
          :stop (immutant/stop app))

(defn start []
  (mount/start (only #{#'server})))

(defn stop []
  (mount/stop))