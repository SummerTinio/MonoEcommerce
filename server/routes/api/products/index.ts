import express, { Request, Response } from 'express';
import prisma from '../../../../lib/prisma';

export default function getProductsRoutes() {
  const router = express.Router();

  router.get('/', async (req: Request, res: Response) => {
    res.json([
      {
        name: 'Sparrow Bear',
        date: '2021-09-23',
        description: 'Express server event',
      },
    ]);
  });

  router.get('/products', async (req: Request, res: Response) => {
    const posts = await prisma.product.findMany();
    res.json({
      success: true,
      payload: posts,
      message: 'Operation Successful',
    });
  });

  return router;
}
