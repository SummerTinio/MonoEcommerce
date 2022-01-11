import type { NextApiRequest, NextApiResponse } from 'next';
// using the built in prisma client --> research
import prisma from '../../../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  console.log(req.query);
  // SELECT *
  const query = await prisma.product.findMany();

  // only choose 1 -- linux or windows.. linux better
  console.log(query);
  return res.json(query);
}
// next js needs plugin to use middleware <----
// GET api/events - get all events
