import type { NextApiRequest, NextApiResponse } from 'next';
// using the built in prisma client --> research
import prisma from '../../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const query = req.query; // ---> on http://localhost:3000/api/v1/users?hello=helladssadas , console logs hello=hellasdasdad
  console.log(query);

  if (req.method === 'GET') {
    const users = await prisma.user.findMany();
    return res.json(users);
  } else if (req.method === 'POST') {
    const newUser = await prisma.user.create({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      memberType: req.body.memberType,
      deliveryAddress: req.body.deliveryAddress,
    });
    return res.json(newUser);
  } else if (req.method === 'PUT' || req.method === 'PATCH') {
    // we're still doing a put.
    const userId = req.query.id;
    const newName = req.body.name;

    const updatedUser = await prisma.user.update({
      where: {
        id: `${userId}`,
      },
      data: {
        name: newName,
      },
    });
    return res.json(updatedUser);
  } else if (req.method === 'DELETE') {
    const userId = req.query.id;
    const deletedUser = await prisma.user.delete({
      where: {
        id: `${userId}`,
      },
    });
    return res.status(204);
  }

  // SELECT *
  // const query = await prisma.user.findMany();

  // only choose 1 -- linux or windows.. linux better
  // console.log(query);
  // return res.json(query);
}
// next js needs plugin to use middleware <----
// GET api/events - get all events
