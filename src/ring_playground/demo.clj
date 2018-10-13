(ns ring-playground.demo
  (:require [integrant.core :as ig]
            [immutant.web :as immutant]))

(defmethod ig/init-key :immutant/web-server [_ {:keys [host port app] :as config
                                                :or {host "0.0.0.0" port 3000}}]
  (prn "fefas")
  (immutant/run (fn [] (app config)) {:port port :host host}))


(defmethod ig/halt-key! :immutant/web-server [_ server]
  (immutant/stop server))

(def config {:immutant/web-server {:handler (fn [_] "Hello")}})

(defonce ^:dynamic *system* nil)

(defn system [] *system*)

(defn start
  ([s]
    (if s
      (do
        (prn "s initialized")
        s)
      (do
        (prn "starting s")
        (alter-var-root (var s) (fn [_] (ig/init config)))))
    #_(cond-> s (nil? s) (alter-var-root (var s) #(ig/init config))))
  ([] (start *system*)))

(defn stop
  ([s] (when s (alter-var-root s (fn [s] (ig/halt! s) nil))))
  ([] (stop #'*system*)))

(defn restart
  ([s] (do (stop s) (start s)))
  ([] (restart #'*system*)))
