import { promisify } from 'util';

import express, { Request, Response } from 'express';
import logger from 'loglevel';

import { NextHandlerType } from '.';
import { setUpCloseOnExit } from './utils';
import getRoutes from './routes';

function startServer(handle: NextHandlerType, port: number) {
  const app = express();

  app.use('/api', getRoutes());

  app.all('*', (req: Request, res: Response) => {
    return handle(req, res);
  });

  return new Promise((resolve) => {
    const server = app.listen(port, () => {
      logger.info(`Custom NextJS-Express Server Listening at ${port}!`);

      const closeServer = server.close.bind(server);
      /** @ts-ignore */
      server.close = promisify(closeServer);

      setUpCloseOnExit(server);

      resolve(server);
    });
  });
}

export { startServer };
