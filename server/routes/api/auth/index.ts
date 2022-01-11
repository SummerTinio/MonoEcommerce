import express, { Request, Response } from 'express';

export default function getAuthRoutes() {
  const router = express.Router();

  router.get('/', (req: Request, res: Response) => {
    res.json([
      {
        name: 'Sparrow Bear',
        date: '2021-09-23',
        description: 'Express server event',
      },
    ]);
  });

  return router;
}
