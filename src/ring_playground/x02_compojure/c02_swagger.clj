(ns ring-playground.x02-compojure.c02-swagger
  (:require [mount.core :as mount :refer [only defstate]]
            [immutant.web :as immutant]
            [compojure.api.sweet :refer [GET POST context api]]
            [ring.util.http-response :refer [ok]]
            [schema.core :as s]))

;https://github.com/metosin/compojure-api
(s/defschema Pizza
  {:name                         s/Str
   (s/optional-key :description) s/Str
   :size                         (s/enum :L :M :S)
   :origin                       {:country (s/enum :FI :PO)
                                  :city                          s/Str}})

(def app
  (api
    {:swagger
     {:ui "/api-docs"
      :spec "/swagger.json"
      :data {:info {:title "Sample API"
                    :description "Compojure Api example"}
             :tags [{:name "api", :description "some apis"}]
             :consumes ["application/json"]
             :produces ["application/json"]}}}

    (context "/api" []
             :tags ["api"]

             (GET "/plus" []
                  :return {:result Long}
                  :query-params [x :- Long, y :- Long]
                  :summary "adds two numbers together"
                  (ok {:result (+ x y)}))

             (POST "/echo" []
                   :return Pizza
                   :body [pizza Pizza]
                   :summary "echoes a Pizza"
                   (ok pizza)))))

(defstate server
          :start (immutant/run #'app {:port 3000})
          :stop (immutant/stop app))

(defn start []
  (mount/start (only #{#'server})))

(defn stop []
  (mount/stop))
