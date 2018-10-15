(ns ring-playground.core
  (:require
    [immutant.web :as immutant]
    [com.stuartsierra.component :as component]
    ;Ring basics
    [ring-playground.x01_ring.r01-hello-world :as x01r01]
    [ring-playground.x01_ring.r02-hiccup :as x01r02]
    [ring-playground.x01_ring.r03-params :as x01r03]
    [ring-playground.x01-ring.r04-routing :as x01r04]
    [ring-playground.x01-ring.r05-uploads :as x01r05]
    [ring-playground.x01-ring.r06-sessions :as x01r06]
    [ring-playground.x01-ring.r07-static-resources :as x01r07]
    ;Compojure
    [ring-playground.x02_compojure.c01-compojure-example :as x02r01]
    [ring-playground.x02-compojure.c02-swagger :as x02r02]
    ;bidi
    [ring-playground.x03-bidi.core :as x02r03]
    ;sente
    [ring-playground.x04-sente.sente :as sente]
    ))

(defrecord Server [server port])

(extend-type
  Server
  component/Lifecycle
  (start [{:keys [port handler] :as this}]
    (println "Starting the server!")
    (-> this
        (assoc :server (immutant/run handler {:port port}))
        (assoc :port port)))
  (stop [this]
    (println "Stopping the server!")
    (println (:server this))
    (-> this
        (update :server immutant/stop)
        (assoc :server nil))))

(defn new-server [handler & {:keys [port] :or {port 3000}}]
  (map->Server {:handler handler :port port}))

(defn system [handler]
  (component/system-map
    :server (new-server handler)))

(def ^:dynamic *system* nil)

(defn start [handler]
  (alter-var-root
    #'*system*
    (constantly (component/start-system (system handler)))))

(defn stop []
  (alter-var-root #'*system* component/stop-system))