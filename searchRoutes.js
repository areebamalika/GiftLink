const express = require("express");
const router = express.Router();
const { connectToDatabase } = require("./db");

router.get("/api/search", async (req, res) => {
  try {
    const db = await connectToDatabase();

    const { category } = req.query;

    const filter = {};

    if (category) {
      filter.category = category;
    }

    const results = await db
      .collection("gifts")
      .find(filter)
      .toArray();

    res.status(200).json(results);
  } catch (error) {
    console.error("Error searching gifts:", error);
    res.status(500).json({ error: "Failed to search gifts" });
  }
});

module.exports = router;
