# Grafana YoMo streaming datasource

This datasource connects to a YoMo using websockets and subscribes to a stream.

![Animation showing timeseries being streamed to Grafana](https://github.com/yomorun/yomo-websocket-datasource/blob/main/grafana-yomo-streams.gif)

## Installation

Use the releases link on github and download the `.zip`.
Then just `unzip` it to your Grafana plugins folder.

You can also build your own using `yarn build` and moving the `dist` folder to your grafana plugins.

## Datasource Configuration

### Base URL

Base URL to the YoMo server.

#### Examples

```
wss://yomo.cel-la.store/v3/ws
```

## Query Configuration

### NumericFields

Comma separated list of numeric fields. Example: 'noise'.

### StringFields

Comma separated list of attributes to return as fields.

## Learn more
- [Grafana documentation](https://grafana.com/docs/)
- [Grafana Tutorials](https://grafana.com/tutorials/) - Grafana Tutorials are step-by-step guides that help you make the most of Grafana
