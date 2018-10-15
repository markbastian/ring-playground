(ns ring-playground.demo.core
  (:require [reagent.core :as reagent :refer [atom]]))

(defn render [state]
  [:h3 "Hello cljs world!"])

(when-let [app-context (. js/document (getElementById "app"))]
  (let [state (atom {})]
    (reagent/render-component
      [render state]
      app-context)))