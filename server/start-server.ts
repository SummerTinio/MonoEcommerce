import { promisify } from 'util';

import express, { Request, Response } from 'express';
import helmet from 'helmet';
import logger from 'loglevel';

import { NextHandlerType } from '.';
import errorHandler from './middleware/error-handler';
import { setUpCloseOnExit } from './utils';
import getRoutes from './routes';

function startServer(handle: NextHandlerType, port: number) {
  const app = express();

  app.disable('x-powered-by');

  app.use(helmet());

  app.use(express.json());

  app.use('/api', getRoutes());

  app.use(errorHandler);

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
