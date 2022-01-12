import type { NextApiRequest, NextApiResponse } from 'next';
// using the built in prisma client --> research
import prisma from '../../../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const query = req.query; // ---> on http://localhost:3000/api/v1/products?hello=helladssadas , console logs hello=hellasdasdad
  console.log(query);

  if (req.method === 'GET') {
    const products = await prisma.product.findMany();
    return res.json(products);
  } else if (req.method === 'POST') {
    const newProduct = await prisma.product.create({
      name: req.body.name,
      price: req.body.price,
      availableQuantity: req.body.availableQuantity,
    });
    return res.json(newProduct);
  } else if (req.method === 'PUT' || req.method === 'PATCH') {
    // we're still doing a put.
    const productId = req.query.id;
    const newName = req.body.name;

    const updatedProduct = await prisma.product.update({
      where: {
        id: `${productId}`,
      },
      data: {
        name: newName,
      },
    });
    return res.json(updatedProduct);
  } else if (req.method === 'DELETE') {
    const productId = req.query.id;
    const deletedProduct = await prisma.product.delete({
      where: {
        id: `${productId}`,
      },
    });
    return res.status(204);
  }

  // SELECT *
  // const query = await prisma.product.findMany();

  // only choose 1 -- linux or windows.. linux better
  // console.log(query);
  // return res.json(query);
}
// next js needs plugin to use middleware <----
// GET api/events - get all events
