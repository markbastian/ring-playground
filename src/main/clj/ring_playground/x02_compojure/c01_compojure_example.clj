(ns ring-playground.x02_compojure.c01-compojure-example
  (:require
    [compojure.core :refer :all]
    [compojure.route :as route]
    [hiccup.page :refer [html5]]
    [ring.util.http-response :refer [ok]]
    [clj-time.core :as time]))

;https://github.com/weavejester/compojure
; "Compojure is a small routing library for Ring that allows web
; applications to be composed of small, independent parts."
(defroutes app
  (GET "/" [] (ok (html5 [:h1 "Hello World"])))
  (GET "/time" [] (str "The time is: " (time/now)))
  (route/not-found "<h1>Page not found</h1>"))