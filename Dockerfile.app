FROM node:11.3-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . .

RUN apk add --no-cache make gcc g++ python
RUN npm install
RUN npm run build

FROM python:3.7

WORKDIR /usr/src/app
COPY --from=0 /usr/src/app .

RUN pip install --trusted-host pypi.org --no-cache-dir -r requirements.txt

ENV FLASK_APP autoapp.py
ENV FLASK_DEBUG 0

CMD ["gunicorn", "-k", "geventwebsocket.gunicorn.workers.GeventWebSocketWorker", "-w", "1", "--bind", "0.0.0.0:5000", "--timeout", "180", "--access-logfile", "-", "autoapp:app"]
