import defaults from 'lodash/defaults';
import React, { ChangeEvent, PureComponent } from 'react';
import { LegacyForms } from '@grafana/ui';
import { QueryEditorProps } from '@grafana/data';
import { DataSource } from './DataSource';
import { defaultQuery, MyDataSourceOptions, MyQuery } from './types';

const { FormField } = LegacyForms;

type Props = QueryEditorProps<DataSource, MyQuery, MyDataSourceOptions>;

export class QueryEditor extends PureComponent<Props> {
  onNumberFieldsChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onChange, query } = this.props;
    onChange({ ...query, numberFields: event.target.value.split(',') });
  };

  onStringFieldsChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onChange, query } = this.props;
    onChange({ ...query, stringFields: event.target.value.split(',') });
  };

  render() {
    const query = defaults(this.props.query, defaultQuery);
    const { numberFields, stringFields } = query;

    return (
      <div className="gf-form">
        <FormField
          labelWidth={10}
          value={numberFields || ''}
          onChange={this.onNumberFieldsChange}
          label="Numeric fields"
          tooltip="Comma separated list of numeric fields. Example: 'noise'"
        />
        <FormField
          labelWidth={10}
          value={stringFields || ''}
          onChange={this.onStringFieldsChange}
          label="String fields"
          tooltip="Comma separated list of attributes to return as fields."
        />
      </div>
    );
  }
}
