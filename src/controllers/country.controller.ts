import { get } from '@loopback/rest';

import { CountryService, CountryServiceProvider } from '../services';
import { Country } from '../models';

export class CountryController {

  constructor(
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
                // Commented out till knowing why this points to
                // #/components/schemas/Country
                // 'x-ts-type': Country
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
