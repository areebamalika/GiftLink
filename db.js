const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017";

const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect();
    console.log("Connected successfully to MongoDB");

    const db = client.db("giftlink");
    return db;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
}

module.exports = {
  client,
  connectDB
};
