export default function handler(req, res) {
  res.status(200).json({
    status: "ok",
    message: "Worker is healthy and connected ✅",
    timestamp: new Date().toISOString()
  });
}
