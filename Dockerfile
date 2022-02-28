# syntax=docker/dockerfile:1
FROM nginx

# create tarball from dist/apc-ui
# cd dist/apc-ui
# tar -cvf apc-ui.tar.gz *

ADD apc-ui.tar.gz /usr/share/nginx/html
