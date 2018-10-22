import { DefaultCrudRepository } from '@loopback/repository';
import { Country } from '../models';
import { CountryDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class CountryRepository extends DefaultCrudRepository<
  Country,
  typeof Country.prototype.name
  > {
  constructor(
    @inject('datasources.country') dataSource: CountryDataSource,
  ) {
    super(Country, dataSource);
  }
}
