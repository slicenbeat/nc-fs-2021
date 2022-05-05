FROM nginx:1.21.3
COPY html /etc/nginx/html
COPY nginx.conf etc/nginx
EXPOSE 8080
CMD nginx -g "daemon off;"