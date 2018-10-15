(ns ring-playground.demo.web.home
  (:require  [hiccup.page :refer [html5 include-css include-js]]))

;(require '[hiccup-bridge.core :as hicv])
;(hicv/html->hiccup "<foo><bar>buzz</bar></foo>")

(defn login-page []
  (html5
    [:head
     [:title "My Page"]
     [:link {:rel "shortcut icon" :href "#"}]
     (include-css "/assets/bootstrap/css/bootstrap.min.css")]
    [:body
     [:form
      {:action "action_page.php"}
      [:div.imgcontainer [:img.avatar {:src "img_avatar2.png", :alt "Avatar"}]]
      [:div.container
       [:label {:for "uname"} [:b "Username"]]
       [:input {:type "text", :placeholder "Enter Username", :name "uname", :required "required"}]
       [:label {:for "psw"} [:b "Password"]]
       [:input {:type "password", :placeholder "Enter Password", :name "psw", :required "required"}]
       [:button {:type "submit"} "Login"]
       [:label [:input {:type "checkbox", :checked "checked", :name "remember"}] " Remember me\n"]]
      [:div.container
       {:style "background-color:#f1f1f1"}
       [:button.cancelbtn {:type "button"} "Cancel"]
       [:span.psw "Forgot " [:a {:href "#"} "password?"]]]]
     (include-js
       "/assets/jquery/jquery.js"
       "/assets/bootstrap/js/bootstrap.min.js")]))

(defn home-page []
  (html5
    [:head
     [:title "My Page"]
     [:link {:rel "shortcut icon" :href "#"}]
     (include-css "/assets/bootstrap/css/bootstrap.min.css")]
    [:body
     [:div#app
      [:h3 "Waiting for app to load..."]]
     (include-js
       "/assets/jquery/jquery.js"
       "/assets/bootstrap/js/bootstrap.min.js"
       "/js/compiled/app.js")]))