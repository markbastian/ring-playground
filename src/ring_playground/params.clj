(ns ring-playground.params
  "https://gist.github.com/weavejester/598020"
  (:require [ring.middleware.params :refer [wrap-params]]
            [ring.util.response :refer [response content-type]]
            [ring.adapter.jetty :refer [run-jetty]]))

(defn page [name]
  (str "<html><body>"
       (if name
         (str "Nice to meet you, " name "!")
         (str "<form>"
              "Name: <input name='name' type='text'>"
              "<input type='submit'>"
              "</form>"))
       "</body></html>"))

(defn handler [{{name "name"} :params}]
  (-> (response (page name))
      (content-type "text/html")))

(def app
  (-> handler wrap-params))

(defn run-example []
  (run-jetty app {:port 8080}))
