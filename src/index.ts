import { ApplicationConfig } from '@loopback/core';

import { LbPocApplication } from './application';

export { LbPocApplication };

export async function main(options: ApplicationConfig = {}): Promise<LbPocApplication> {
  options = Object.assign(
    {
      rest: {
        openApiSpec: {
          setServersFromRequest: true
        }
      }
    },
    options
  );

  const app = new LbPocApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
