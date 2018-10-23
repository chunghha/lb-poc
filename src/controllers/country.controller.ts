import { get } from '@loopback/rest';

import { CountryService, CountryServiceProvider } from '../services';
import { Country } from '../models';

export class CountryController {

  constructor(
    protected countryServiceProvider: CountryServiceProvider = new CountryServiceProvider()) { }

  // Map to `GET /country`
  @get('/countries', {
    responses: {
      '200': {
        description: 'Array of Country model instance',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: {
                'x-ts-type': Country
              }
            },
          },
        },
      },
    },
  })
  async getCountries(): Promise<Country[]> {
    const countryService: CountryService = await this.countryServiceProvider.value();

    return await countryService.getCountries();
  }

}
