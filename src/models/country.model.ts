import {Model, model, property} from '@loopback/repository';

@model()
export class Country extends Model {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  name: string;

  @property({
    type: 'string',
  })
  capital?: string;

  @property({
    type: 'number',
  })
  population?: number;

  @property({
    type: 'string',
  })
  flag?: string;

  @property({
    type: 'string',
  })
  subregion?: string;

  constructor(data?: Partial<Country>) {
    super(data);
  }
}
