export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { task } = req.body;
      if (!task) {
        return res.status(400).json({ error: "Missing task data" });
      }

      // Simulate some background work
      console.log("Received task:", task);
      await new Promise((resolve) => setTimeout(resolve, 2000));

      return res.status(200).json({
        status: "success",
        message: `Task "${task}" completed successfully!`,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed. Use POST." });
  }
}
