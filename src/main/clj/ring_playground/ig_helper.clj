(ns ring-playground.ig-helper
  (:require [integrant.core :as ig]
            [immutant.web :as immutant]))

(defmethod ig/init-key :web/server [_ {:keys [handler host port]}]
  (immutant/run handler {:host host :port port}))

(defmethod ig/halt-key! :web/server [_ server]
  (immutant/stop server))

(defprotocol IGSys
  (system [this])
  (start [this])
  (stop [this])
  (restart [this]))

(defn create-system [config]
  (let [state (atom nil)]
    (reify IGSys
      (system [this] @state)
      (start [this] (if @state @state (swap! state (fn [_] (ig/init config)))))
      (stop [this] (when @state (swap! state ig/halt!)))
      (restart [this] (do
                        (stop this)
                        (start this))))))

(defn app [request] {:status 200 :body "OK"})

(def config
  {:web/server
   {:host    "0.0.0.0"
    :port    3000
    :handler #'app}})

(defonce sys (create-system config))