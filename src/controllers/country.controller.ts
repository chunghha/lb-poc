import { get } from '@loopback/rest';
import { repository } from '@loopback/repository';

import { CountryService, CountryServiceProvider } from '../services';
import { CountryRepository } from '../repositories';
import { Country } from '../models';

export class CountryController {

  constructor(
    @repository(CountryRepository)
    public countryRepository: CountryRepository,

    protected countryServiceProvider: CountryServiceProvider = new CountryServiceProvider()) { }

  // Map to `GET /country`
  @get('/country', {
    responses: {
      '200': {
        description: 'Array of Country model instance',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: {
                'x-ts-type': Country
              },
            },
          },
        },
      },
    },
  })
  async country(): Promise<Country[]> {
    const countryService: CountryService = await this.countryServiceProvider.value();

    return await countryService.getCountries();
  }

}
