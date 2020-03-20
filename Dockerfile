FROM nginx
RUN rm /etc/nginx/conf.d/default.conf

ADD nginx/test.conf /etc/nginx/conf.d/default.conf

COPY web/ /usr/share/nginx/html/web/

COPY wrap/ /usr/share/nginx/html/wrap/

EXPOSE 18093
