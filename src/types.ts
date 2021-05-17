import { DataQuery, DataSourceJsonData } from '@grafana/data';

export interface MyQuery extends DataQuery {
  numberFields: string[];
  stringFields: string[];
}

export const defaultQuery: Partial<MyQuery> = {
  numberFields: [],
  stringFields: [],
};

/**
 * These are options configured for each DataSource instance
 */
export interface MyDataSourceOptions extends DataSourceJsonData {
  url?: string;
}
