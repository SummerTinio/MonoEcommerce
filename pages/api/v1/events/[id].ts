import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../lib/prisma';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  /** 
   if (req.method === 'GET') {
 } else if (req.method === 'POST') {
 } else {
   }
   * 
   */

  return res.json({
    prop: 'Hey, your id is ' + id,
  });
}
