FROM sebastienelet/docker-node-imagemagick

RUN set -x

# in order to build this image we need to pass build argument --build-arg NPM_TOKEN=${NPM_TOKEN}
ARG NPM_TOKEN
ENV APP_DIR /app

RUN mkdir $APP_DIR
WORKDIR $APP_DIR

COPY . .
RUN echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > ~/.npmrc \
  && yarn install --non-interactive --production=false \
  && rm -f ~/.npmrc

ENTRYPOINT ["yarn"]