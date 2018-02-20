(ns ring-playground.x01-ring.r06-sessions
  (:use ring.middleware.session
        ring.util.response
        ring.adapter.jetty)
  (:require [immutant.web :as immutant]
            [mount.core :as mount :refer [only defstate]]))

(defn handler [{:keys [session uri]}]
  (let [n (session :n 1)]
    (if (= uri "/")
      (-> (response (str "You have visited " n " times"))
          (content-type "text/plain")
          (assoc-in [:session :n] (inc n)))
      (-> (response "Page not found")
          (status 404)))))

(def app
  (-> handler wrap-session))

(defstate server
          :start (immutant/run #'app {:port 3000})
          :stop (immutant/stop app))

(defn start []
  (mount/start (only #{#'server})))

(defn stop []
  (mount/stop))