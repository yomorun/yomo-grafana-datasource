# Grafana YoMo streaming datasource

This datasource connects to a YoMo using websockets and subscribes to a stream.

![Animation showing timeseries being streamed to Grafana](https://github.com/yomorun/yomo-grafana-datasource/blob/main/grafana-yomo-streams.gif)

## Installation

Install [grafana](https://grafana.com/docs/grafana/latest/installation)

Use the [releases link](https://github.com/yomorun/yomo-grafana-datasource/releases) on github and download the `.zip`. Then just `unzip` it to your [Grafana plugins](https://grafana.com/docs/grafana/latest/plugins/installation/#install-a-packaged-plugin) folder. You can also build your own using `yarn build` and moving the `dist` folder to your grafana plugins.

> Note, Linux requires to add the plugin id `yomo-grafana-datasource` to the `allow_loading_unsigned_plugins` in `/etc/grafana/grafana.ini`.

To start Grafana service.

## Datasource Configuration

### WebSocket Server URL
#### Examples

```
wss://yomo.cel-la.store/v3/ws
```

![Datasource Configuration](https://github.com/yomorun/yomo-grafana-datasource/blob/main/config-1.png)

![Datasource Configuration](https://github.com/yomorun/yomo-grafana-datasource/blob/main/config-2.png)

![Datasource Configuration](https://github.com/yomorun/yomo-grafana-datasource/blob/main/config-3.png)

## Query Configuration

### NumericFields

Comma separated list of numeric fields. Example: 'noise'.

### StringFields

Comma separated list of attributes to return as fields.

![Query Configuration](https://github.com/yomorun/yomo-grafana-datasource/blob/main/config-4.png)

![Query Configuration](https://github.com/yomorun/yomo-grafana-datasource/blob/main/config-5.png)

## Learn more
- [Grafana documentation](https://grafana.com/docs/)
- [Grafana Tutorials](https://grafana.com/tutorials/) - Grafana Tutorials are step-by-step guides that help you make the most of Grafana
