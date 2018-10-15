(ns ring-playground.demo.web.core
  (:require  [compojure.core :refer [routes GET]]
             [ring.util.http-response :refer [ok content-type]]
             [ring-playground.demo.web.home :as web-home]
             [ring.middleware.webjars :refer [wrap-webjars]]
             [ring.middleware.defaults :refer :all]
             [ring.middleware.resource :refer [wrap-resource]]))

(defn app [handler]
  (->
    (routes
      (GET "/" [] (web-home/home-page))
      (GET "/login" [] (web-home/login-page))
      (GET "/foo" [] "Hello Foo")
      (GET "/bar" [] "Hello Bar"))
    (wrap-defaults site-defaults)
    (wrap-resource "public")
    wrap-webjars))