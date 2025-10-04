export default function handler(req, res) {
  res.status(200).json({
    status: "ok",
    message: "Träcon worker is online",
    routes: ["/api/health", "/api/run-task", "/api/save-cookies"]
  });
}