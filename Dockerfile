FROM node:11.3-alpine

RUN mkdir -p /usr/src/app_offline
WORKDIR /usr/src/app_offline

COPY . .

RUN apk add --no-cache make gcc g++ python
RUN npm install
RUN cp src/router/index.ts.offline src/router/index.ts
RUN npm run build

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . .
RUN cp -Rp /usr/src/app_offline/node_modules .
RUN npm run build

FROM python:3.7

RUN apt update && apt install -y zip coreutils

RUN mkdir -p /usr/src/app_offline
WORKDIR /usr/src/app_offline
COPY --from=0 /usr/src/app_offline .

RUN pip install --trusted-host pypi.org --no-cache-dir -r requirements.txt

ENV FLASK_APP autoapp.py
ENV FLASK_DEBUG 1
ENV APP_SECRET 1234

RUN ./gen_offline_docker.sh

FROM python:3.7

WORKDIR /usr/src/app
COPY --from=0 /usr/src/app .

RUN mkdir -p ./app/static/build/assets/offline
COPY --from=1 /usr/src/app_offline/offline/* ./app/static/build/assets/offline/

RUN pip install --trusted-host pypi.org --no-cache-dir -r requirements.txt

ENV FLASK_APP autoapp.py
ENV FLASK_DEBUG 0

CMD ["gunicorn", "-k", "geventwebsocket.gunicorn.workers.GeventWebSocketWorker", "-w", "1", "--bind", "0.0.0.0:5000", "--timeout", "180", "--access-logfile", "-", "autoapp:app"]
