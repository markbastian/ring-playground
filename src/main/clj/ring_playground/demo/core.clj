(ns ring-playground.demo.core
  (:require [integrant.core :as ig]
            [ring-playground.demo.web.core :as web]
            [immutant.web :as immutant]))

(defmethod ig/init-key :immutant/web-server [_ {:keys [host port handler] :as config
                                                :or {host "0.0.0.0" port 3000}}]
  (immutant/run (fn [request] ((handler config) request)) {:port port :host host}))


(defmethod ig/halt-key! :immutant/web-server [_ server]
  (immutant/stop server))

(def config {:immutant/web-server {:handler #'web/app }})

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
