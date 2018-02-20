(ns ring-playground.x01-ring.r05-uploads
  (:require
    [immutant.web :as immutant]
    [ring.util.response :as rur]
    [ring.middleware.params :refer [wrap-params]]
    [mount.core :refer [defstate only] :as mount]
    [ring.middleware.multipart-params :refer [wrap-multipart-params]]
    [clojure.java.io :as io]))

;https://github.com/ring-clojure/ring/wiki/File-Uploads
;https://ring-clojure.github.io/ring/ring.middleware.multipart-params.html
;https://gist.github.com/thescalaguy/c743bf7c93f6363f3d22de28c7c9bb3d
;To use: curl -XPOST  "http://localhost:3000" -F file=@project.clj

(defn- num-lines
  [file]
  (with-open [rdr (io/reader file)]
    (count (line-seq rdr))))

(defn file-handler
  [{{{tempfile :tempfile filename :filename} "file"} :params :as request}]
  (let [n (num-lines tempfile)]
    (rur/response (str "File " filename " has " n " lines "))))

(def app
  (-> file-handler
      wrap-params
      wrap-multipart-params))

(defstate server
          :start (immutant/run #'app {:port 3000})
          :stop (immutant/stop app))

(defn start []
  (mount/start (only #{#'server})))

(defn stop []
  (mount/stop))

