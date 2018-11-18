import { Entity, model, property } from '@loopback/repository';

@model()
export class Country extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true
  })
  name: string;

  @property({
    type: 'string'
  })
  capital?: string;

  @property({
    type: 'string'
  })
  flag?: string;

  @property.array(Number)
  latlng?: number[];

  @property({
    type: 'number'
  })
  population?: number;

  @property({
    type: 'string'
  })
  region?: string;

  @property({
    type: 'string'
  })
  subregion?: string;

  constructor(data?: Partial<Country>) {
    super(data);
  }
}
