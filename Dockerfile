FROM golang:1.11-alpine3.8 AS builder

MAINTAINER Gerardo Ojeda <gerardo.ojeda.o@gmail.com>

ENV CGO_ENABLED=0
ENV GODEBUG=1
RUN apk --no-cache add ca-certificates git

ADD . /app
WORKDIR /app/server
RUN go mod download
RUN go build -o /main .

FROM node:alpine AS node_builder
COPY --from=builder /app/client ./
RUN npm install
RUN npm run build

FROM alpine:latest
ADD server/keys keys
RUN apk --no-cache add ca-certificates
COPY --from=builder /main ./
COPY --from=node_builder /build ./web
RUN chmod +x ./main
EXPOSE 3000
CMD ./main