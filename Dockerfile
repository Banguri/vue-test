FROM node:13

USER root

LABEL maintainer="I-ON SDP"

RUN curl -o- -L https://yarnpkg.com/install.sh | bash

# Create app directory
WORKDIR /app/basecamp

COPY . .

RUN yarn

# Build Basecamp
RUN yarn build:dev

EXPOSE 8000

CMD [ "yarn", "start:dev-ice4" ]
