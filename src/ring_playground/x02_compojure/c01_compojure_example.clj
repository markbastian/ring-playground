(ns ring-playground.x02_compojure.c01-compojure-example
  (:require
    [compojure.core :refer :all]
    [compojure.route :as route]
    [ring.adapter.jetty :refer [run-jetty]]
    [hiccup.page :refer [html5]]
    [ring.util.http-response :refer [ok]]
    [clj-time.core :as time]))

(defroutes app
  (GET "/" [] (ok (html5 [:h1 "Hello World"])))
  (GET "/time" [] (str "The time is: " (time/now)))
  (route/not-found "<h1>Page not found</h1>"))