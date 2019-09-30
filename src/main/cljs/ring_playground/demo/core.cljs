(ns ring-playground.demo.core
  (:require [reagent.core :as reagent :refer [atom]]))

;<input id="__anti-forgery-token"
; name="__anti-forgery-token"
; type="hidden"
; value="/RLi/dMU+fCPflqWQALo5w4yu4jwxxDcT6N+p8gO8t5qUTRGFcBgWQ0Oy2P9Q5bjbIOQKz9lnjE5rawS">
(defn render [state]
  [:form
   {:action "/login" :method :POST}
   "First name:"
   [:br] [:input {:type "text", :name "firstname"}]
   [:br] "Last name:"
   [:br] [:input {:type "text", :name "lastname"}]
   #_#_[:br] [:input {:type  "hidden"
                  :name  "__anti-forgery-token"
                  :value (.-value (. js/document (getElementById "__anti-forgery-token")))}]
   [:br]
   [:br] [:input {:type "submit", :value "Submit"}]
   #_[:p (.-value (. js/document (getElementById "__anti-forgery-token")))]])

(when-let [app-context (. js/document (getElementById "app"))]
  (let [state (atom {})]
    (reagent/render-component
      [render state]
      app-context)))