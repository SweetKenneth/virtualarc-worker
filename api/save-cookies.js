export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Use POST' });
  const { cookies } = req.body || {};
  if (!Array.isArray(cookies)) return res.status(400).json({ error: 'cookies[] required' });
  res.status(200).json({ saved: cookies.length });
}
