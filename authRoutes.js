const express = require("express");
const router = express.Router();
const { connectToDatabase } = require("./db");

router.get("/api/auth/me", async (req, res) => {
  try {
    const db = await connectToDatabase();

    const email = req.user?.email;

    if (!email) {
      return res.status(401).json({
        error: "Unauthorized"
      });
    }

    const user = await db.collection("users").findOne({
      email: email
    });

    if (!user) {
      return res.status(404).json({
        error: "User not found"
      });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error finding current user:", error);
    res.status(500).json({
      error: "Failed to retrieve current user"
    });
  }
});

module.exports = router;
