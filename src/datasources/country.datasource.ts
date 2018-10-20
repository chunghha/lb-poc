import { inject } from '@loopback/core';
import { juggler } from '@loopback/repository';

import * as config from './country.datasource.json';

export class CountryDataSource extends juggler.DataSource {
  static dataSourceName = 'country';

  constructor(
    @inject('datasources.config.country', { optional: true })
    dsConfig: Object = config
  ) {
    super(dsConfig);
  }
}
