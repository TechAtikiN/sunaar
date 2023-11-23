FROM golang:1.21-alpine

WORKDIR /usr/src/app

COPY go.mod go.sum ./
RUN go mod download && go mod verify

COPY main.go ./
RUN go build -o /usr/bin/app

CMD ["/usr/bin/app"]

