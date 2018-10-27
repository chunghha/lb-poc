import { Client, expect } from '@loopback/testlab';
import { LbPocApplication } from '../..';
import { setupApplication } from './test-helper';

describe('CountryController', () => {
  let app: LbPocApplication;
  let client: Client;

  before('setupApplication', async () => {
    ({ app, client } = await setupApplication());
  });

  after(async () => {
    await app.stop();
  });

  it('invokes GET /countries', async () => {
    const res = await client.get('/countries').expect(200);
    expect(res.body[0].name).to.equal('Afghanistan');
  });
});
