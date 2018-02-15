(ns ring-playground.x01-ring.r04-routing
  (:require
    [immutant.web :as immutant]
    ;https://github.com/weavejester/hiccup
    [hiccup.page :refer [html5]]
    ;http://ring-clojure.github.io/ring/ring.util.response.html
    [ring.util.response :as rur]
    [mount.core :refer [defstate only] :as mount])
  (:import (java.util Date)))

(defn handler [{:keys [query-string path-info] :as request}]
  (let [body   (case path-info
                 "/time" (html5 [:p (str "The time is " (Date.) ".")])
                  "Hi")]
    (-> body
        rur/response
        (rur/content-type "text/html"))))

(defstate server
          :start (immutant/run #'handler {:port 3000})
          :stop (immutant/stop server))

(defn start []
  (mount/start (only #{#'server})))

(defn stop []
  (mount/stop))