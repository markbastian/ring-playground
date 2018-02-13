(ns ring-playground.core
  (:require [ring.adapter.jetty :refer [run-jetty]]))

;https://github.com/ring-clojure/ring/wiki/Concepts
;https://github.com/ring-clojure/ring/wiki/Getting-Started
;http://kendru.github.io/restful-clojure/2014/02/19/getting-a-web-server-up-and-running-with-compojure-restful-clojure-part-2/
(defn handler [request]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body "I like dogs"})

(defn run-example []
  (run-jetty #'handler {:port 3000}))

