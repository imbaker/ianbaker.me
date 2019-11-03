FROM nginx:stable

COPY ./public/ /data/www/
COPY ./nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-c", "/etc/nginx/nginx.conf", "-g", "daemon off;"]