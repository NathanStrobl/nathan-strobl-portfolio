FROM alpine:latest
RUN apk add --update hugo
WORKDIR /app
COPY . .
EXPOSE 1313
RUN hugo
CMD ["hugo", "serve"]
