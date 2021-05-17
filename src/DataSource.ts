import defaults from 'lodash/defaults';

import {
  DataQueryRequest,
  DataQueryResponse,
  DataSourceApi,
  DataSourceInstanceSettings,
  CircularDataFrame,
  FieldType,
} from '@grafana/data';

import { Observable, merge } from 'rxjs';

import { MyQuery, MyDataSourceOptions, defaultQuery } from './types';

export class DataSource extends DataSourceApi<MyQuery, MyDataSourceOptions> {
  serverURL?: string;

  constructor(instanceSettings: DataSourceInstanceSettings<MyDataSourceOptions>) {
    super(instanceSettings);
    this.serverURL = instanceSettings.jsonData.url || 'ws://localhost:3000';
  }

  query(options: DataQueryRequest<MyQuery>): Observable<DataQueryResponse> {
    const streams = options.targets.map((target) => {
      const query = defaults(target, defaultQuery);

      return new Observable<DataQueryResponse>((subscriber) => {
        const frame = new CircularDataFrame({
          append: 'tail',
          capacity: 10,
        });

        frame.refId = query.refId;
        frame.addField({ name: 'time', type: FieldType.time });

        const { numberFields, stringFields } = query;
        if (!numberFields.length && !stringFields.length) {
          return;
        }
        numberFields.map((field) => {
          frame.addField({ name: field, type: FieldType.number });
        });
        stringFields.map((field) => {
          frame.addField({ name: field, type: FieldType.string });
        });

        const socket = new WebSocket(this.serverURL || '');
        socket.onerror = (error: any) => {
          console.log(`WebSocket error: ${JSON.stringify(error)}`);
        };
        socket.onmessage = (event: any) => {
          const parsedEvent = JSON.parse(event.data);
          frame.add(parsedEvent);

          subscriber.next({
            data: [frame],
            key: query.refId,
          });
        };

        return () => {
          socket.close();
        };
      });
    });

    return merge(...streams);
  }

  async testDatasource() {
    // Implement a health check for your data source.
    return {
      status: 'success',
      message: 'Success',
    };
  }
}
