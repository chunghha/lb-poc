import { getService, juggler } from '@loopback/service-proxy';
import { inject, Provider } from '@loopback/core';

import { CountryDataSource } from '../datasources';
import { Country } from '../models';

export interface CountryService {
  getCountries(): Promise<Country[]>;
}

export class CountryServiceProvider implements Provider<CountryService> {
  constructor(
    // country must match the name property in the datasource json file
    @inject('datasources.country')
    protected dataSource: juggler.DataSource = new CountryDataSource()
  ) { }

  value(): Promise<CountryService> {
    return getService(this.dataSource);
  }
}
