(defproject ring-playground "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [ring/ring-core "1.6.3"]
                 [ring/ring-jetty-adapter "1.6.3"]
                 [compojure "1.6.0"]
                 [metosin/compojure-api "1.1.11"]
                 [com.walmartlabs/lacinia "0.24.0"]
                 [mount "0.1.12"]
                 [org.immutant/web "2.1.10"]
                 [hiccup "1.0.5"]
                 [bidi "2.1.3"]
                 [prone "1.5.0"]
                 [com.stuartsierra/component "0.3.2"]
                 [clj-http "3.8.0"]
                 [prone "1.5.0"]
                 [com.taoensso/sente "1.12.0"]
                 [org.clojure/core.async "0.4.474"]
                 [stylefruits/gniazdo "1.0.1"]
                 [integrant "0.7.0"]]
  :plugins [[lein-ring "0.12.3"]]

  :profiles {:dev {:ring {:stacktrace-middleware prone.middleware/wrap-exceptions}}})
