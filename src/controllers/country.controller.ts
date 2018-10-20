import { get } from '@loopback/rest';

import { CountryService, CountryServiceProvider } from '../services';
import { Country } from '../models';

export class CountryController {

  constructor(
    protected countryServiceProvider: CountryServiceProvider = new CountryServiceProvider()) { }

  @get('/country')
  async country(): Promise<Country[]> {
    const countryService: CountryService = await this.countryServiceProvider.value();

    return await countryService.getCountries();
  }

}
