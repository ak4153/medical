// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import db from '../../utils/db';
import Visitor from '../../models/visitor';
export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log('ss');
    const { ip, country } = req.body.data.ip;
    try {
      const newVisitor = new Visitor({
        ip: ip,
        location: country,
      });
      await db.connect();
      await newVisitor.save();
      res.status(202).end();
      await db.disconnect();
    } catch (error) {
      await db.disconnect();
      res.status(418).end();
    }
  }
  if (req.method === 'GET') {
    await db.connect();
    const data = await Visitor.find({});
    res.json(data).end();
    await db.disconnect();
  }
}
