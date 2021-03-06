(ns ring-playground.x01_ring.r03-params
  "https://gist.github.com/weavejester/598020"
  (:require [hiccup.page :refer [html5]]
            [ring.middleware.params :refer [wrap-params]]
            [ring.util.http-response :refer [ok content-type]]))

(defn page [name]
  (html5
    (if name
      [:p (str "Nice to meet you, " name "!")]
      [:form "Name: "
       [:input {:name "name" :type "text"}]
       [:input {:type "submit"}]])))

(defn handler [{{name "name"} :params}]
  (-> name page ok (content-type "text/html")))

(def app
  (-> handler
      ;Our first middleware - wrap-params! Note: View the source.
      wrap-params))