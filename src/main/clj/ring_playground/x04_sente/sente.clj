(ns ring-playground.x04-sente.sente
  (:require [compojure.api.sweet :refer [GET POST context api defroutes]]
            [ring.util.http-response :refer [ok]]
            [ring.middleware.keyword-params :refer [wrap-keyword-params]]
            [ring.middleware.params :refer [wrap-params]]
            [taoensso.sente :as sente]
            [taoensso.sente.server-adapters.immutant :refer [get-sch-adapter]]
            [clojure.core.async :as async :refer [<! >! put! chan]]))

(let [{:keys [ch-recv send-fn connected-uids
              ajax-post-fn ajax-get-or-ws-handshake-fn]}
      (sente/make-channel-socket! (get-sch-adapter) {})]

  (def ring-ajax-post                ajax-post-fn)
  (def ring-ajax-get-or-ws-handshake ajax-get-or-ws-handshake-fn)
  (def ch-chsk                       ch-recv) ; ChannelSocket's receive channel
  (def chsk-send!                    send-fn) ; ChannelSocket's send API fn
  (def connected-uids                connected-uids) ; Watchable, read-only atom
  )

(defroutes my-app-routes
           ;; <other stuff>

           ;;; Add these 2 entries: --->
           (GET  "/chsk" req (ring-ajax-get-or-ws-handshake req))
           (POST "/chsk" req (ring-ajax-post                req))
           )

(def app
  (-> my-app-routes
      ;; Add necessary Ring middleware:
      ring.middleware.keyword-params/wrap-keyword-params
      ring.middleware.params/wrap-params))
#_
(def app
  (-> (api
        {:swagger
         {:ui   "/api-docs"
          :spec "/swagger.json"
          :data {:info     {:title       "Sample API"
                            :description "Compojure Api example"}
                 :tags     [{:name "api", :description "some apis"}]
                 :consumes ["application/json"]
                 :produces ["application/json"]}}}

        (context "/api" []
          :tags ["api"]

          (GET "/plus" []
            :return {:result Long}
            :query-params [x :- Long, y :- Long]
            :summary "adds two numbers together"
            (ok {:result (+ x y)}))
          (GET "/chsk" req (ring-ajax-get-or-ws-handshake req))
          (POST "/chsk" req (ring-ajax-post req))))
      wrap-keyword-params
      wrap-params))

;(defroutes my-app
;           (GET  "/"            req (my-landing-pg-handler  req))
;           (POST "/submit-form" req (my-form-submit-handler req)))
