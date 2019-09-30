(defproject ring-playground "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url  "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.10.1"]
                 [ring/ring-core "1.7.1"]
                 [ring/ring-jetty-adapter "1.7.1"]
                 [ring-webjars "0.2.0"]
                 [ring/ring-defaults "0.3.2"]
                 [compojure "1.6.1"]
                 [metosin/compojure-api "1.1.12"]
                 [com.walmartlabs/lacinia "0.35.0"]
                 [mount "0.1.16"]
                 [org.immutant/web "2.1.10"]
                 [hiccup "1.0.5"]
                 [bidi "2.1.6"]
                 [prone "2019-07-08"]
                 [com.stuartsierra/component "0.4.0"]
                 [clj-http "3.10.0"]
                 [prone "2019-07-08"]
                 [com.taoensso/sente "1.13.1"]
                 [org.clojure/core.async "0.4.500"]
                 [stylefruits/gniazdo "1.1.2"]
                 [integrant "0.7.0"]
                 ;webjars
                 [org.webjars/jquery "3.4.1"]
                 [org.webjars/bootstrap "4.3.1"]
                 ;For convenient conversion of html->hiccup
                 [hiccup-bridge "1.0.1"]
                 ;For client side code
                 [org.clojure/clojurescript "1.10.520"]
                 [reagent "0.8.1"]
                 [metosin/reitit "0.3.9"]
                 [ring/ring-mock "0.4.0"]]

  :plugins [[lein-ring "0.12.4"]
            [lein-cljsbuild "1.1.7" :exclusions [[org.clojure/clojure]]]
            [lein-figwheel "0.5.16"]]

  :source-paths ["src/main/clj" "src/main/cljc"]
  :test-paths ["src/test/clj" "src/test/cljc"]
  :resource-paths ["src/main/resources"]
  :java-source-paths ["src/main/java"]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]

  :jar-exclusions [#"\.swp|\.swo|\.DS_Store"]
  :profiles {:uberjar {:aot :all}
             :dev {:dependencies [[cider/piggieback "0.4.1"]
                                  [figwheel-sidecar "0.5.19"]]
                   :repl-options {:nrepl-middleware [cider.piggieback/wrap-cljs-repl]}}
             :cljs {:plugins [[lein-cljsbuild "1.1.7"]] }}

  :cljsbuild {:builds [{:id           "dev"
                        :source-paths ["src/main/cljs" "src/main/cljc"]

                        ;; If no code is to be run, set :figwheel true for continued automagical reloading
                        :figwheel     true

                        :compiler     {:main                 ring-playground.demo.core
                                       :asset-path           "js/compiled/out"
                                       :output-to            "src/main/resources/public/js/compiled/app.js"
                                       :output-dir           "src/main/resources/public/js/compiled/out"
                                       :source-map-timestamp true}}
                       ;; This next build is an compressed minified build for
                       ;; production. You can build this with:
                       ;; lein cljsbuild once min
                       {:id           "min"
                        :source-paths ["src/main/cljs" "src/main/cljc"]
                        :compiler     {:output-to     "src/main/resources/public/js/compiled/app.js"
                                       :main          ring-playground.demo.core
                                       :optimizations :advanced
                                       :pretty-print  false}}]}

  :figwheel {:css-dirs ["src/main/resources/public/css"]}
  )
