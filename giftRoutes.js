const express = require("express");
const router = express.Router();
const { connectToDatabase } = require("./db");

// Get all gifts
router.get("/api/gifts", async (req, res) => {
  try {
    const db = await connectToDatabase();

    const gifts = await db
      .collection("gifts")
      .find({})
      .toArray();

    res.status(200).json(gifts);
  } catch (error) {
    console.error("Error fetching gifts:", error);
    res.status(500).json({
      error: "Failed to fetch gifts"
    });
  }
});

// Get a single gift by ID
router.get("/api/gifts/:id", async (req, res) => {
  try {
    const db = await connectToDatabase();

    const gift = await db
      .collection("gifts")
      .findOne({
        _id: req.params.id
      });

    if (!gift) {
      return res.status(404).json({
        error: "Gift not found"
      });
    }

    res.status(200).json(gift);
  } catch (error) {
    console.error("Error fetching gift:", error);
    res.status(500).json({
      error: "Failed to fetch gift"
    });
  }
});

module.exports = router;
