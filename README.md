# circleci-docker-test
the repo with some experimental staff

#### How to start

Build docker image

```sh
docker build -t awesome-tool ./
```

Run tests

```sh
docker run -it --rm awesome-tool test

```

Run the app

```sh
docker run -it --rm awesome-tool start

```
