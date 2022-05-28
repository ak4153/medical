// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import db from '../../utils/db';
import Visitor from '../../models/visitor';
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { ip, country } = req.body.data.ip;
    try {
      const newVisitor = new Visitor({
        ip: ip,
        location: country,
      });
      await db.connect();
      await newVisitor.save();
      res.status(202);
      await db.disconnect();
    } catch (error) {
      await db.disconnect();
      res.status(418);
    }
  }
  if (req.method === 'GET') {
    await db.connect();
    console.log(Visitor.find());
    await db.disconnect();
  }
}
