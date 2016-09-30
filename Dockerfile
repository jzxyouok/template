FROM jwilder/nginx-proxy

MAINTAINER dingyiming

EXPOSE 80:80

EXPOSE 443:443

VOLUME /var/run/docker.sock:/tmp/docker.sock