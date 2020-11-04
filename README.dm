# MQTT Demo

## How to start

- `yarn install` to install NPM packages.
- `yarn run browser:prepare` to bundle everything for the client.

## Start everything

- `yarn run broker:start` to start broker. This starts the broker to listen on 1883 for local connections and on `3000` for WS(S) connections.
- `yarn run client:start` to start a simple server client.
- `yarn run browser:start` to start simple HTTP server listening on `http://localhost:8080`
- Open your browser and navigate to `http://localhost:8080` and start playing.
