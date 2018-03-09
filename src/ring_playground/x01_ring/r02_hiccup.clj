(ns ring-playground.x01_ring.r02-hiccup
  "Server-side rendering of static pages with hiccup."
  (:require
    ;https://github.com/weavejester/hiccup
    [hiccup.page :refer [html5]]
    ;https://github.com/metosin/ring-http-response
    [ring.util.http-response :refer [ok content-type]])
  (:import (java.util Date)))

(defn handler [{:keys [query-string] :as request}]
  (let [body (html5 [:h1 "Request Dump:"]
                    [:div]
                    [:table
                     [:tr [:th "Key"] [:th "Value"]]
                     (for [[k v] request]
                       [:tr [:td k] [:td v]])]
                    [:p (str "Generated " (Date.))])]
    (if (= query-string "map")
      {:status  200
       :headers {"Content-Type" "text/html"}
       :body (str body "<p>MAP</p>")}
      (-> (str body "<p>NO MAP</p>") ok (content-type "text/html")))))