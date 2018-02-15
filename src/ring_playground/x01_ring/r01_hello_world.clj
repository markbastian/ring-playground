(ns ring-playground.x01_ring.r01-hello-world
  (:require [ring.adapter.jetty :refer [run-jetty]]
            [mount.core :refer [defstate only] :as mount]
            [immutant.web :as immutant]))

;https://github.com/ring-clojure/ring/wiki/Concepts
;https://github.com/ring-clojure/ring/wiki/Getting-Started
;http://kendru.github.io/restful-clojure/2014/02/19/getting-a-web-server-up-and-running-with-compojure-restful-clojure-part-2/
(defn handler [request]
  {:status 200
   :headers {"Content-Type" "text/html"}
   ;:body "Hello world!"
   :body "<h2>Hello world!</h2>"
   })

(defstate server
          :start (immutant/run #'handler {:port 3000})
          :stop (immutant/stop server))

(defn start []
  (mount/start (only #{#'server})))

(defn stop []
  (mount/stop))

(defn run-jetty-app []
  (run-jetty handler {:join? false :port 8080}))

