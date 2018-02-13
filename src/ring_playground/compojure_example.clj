(ns ring-playground.compojure-example
(:require
  [compojure.core :refer :all]
  [compojure.route :as route]
  [ring.adapter.jetty :refer [run-jetty]]))

(defroutes app
           (GET "/" [] "<h1>Hello World!</h1>")
           (route/not-found "<h1>Page not found</h1>"))

(defn run-example []
  (run-jetty app {:port 3000}))
