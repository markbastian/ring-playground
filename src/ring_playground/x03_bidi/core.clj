(ns ring-playground.x03-bidi.core
  (:require [bidi.ring :refer (make-handler)]
            [ring.util.response :as res]))

(defn index-handler
  [request]
  (res/response "Homepage"))

(defn article-handler
  [{:keys [route-params]}]
  (res/response (str "You are viewing article: " (:id route-params))))

(def app
  (make-handler ["/" {"index.html" index-handler
                      ["articles/" :id "/article.html"] article-handler}]))