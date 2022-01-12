import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  console.log(`database URL is ${process.env.DATABASE_URL}`);

  // SELECT *
  const query = await prisma.product.findMany();

  // only choose 1 -- linux or windows.. linux better
  console.log(query);
  return res.json([
    {
      name: 'Sparrow Bear',
      date: '2021-09-23',
      description: 'Express server event',
    },
  ]);
}

// GET api/events - get all events
