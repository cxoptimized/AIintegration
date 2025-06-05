export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    // Process submission logic here
    res.status(200).json({ message: 'Submission received', data });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}