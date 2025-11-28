// backend/app/config/db.config.js
module.exports = {
  // Default for LOCAL development:
  //   mongodb://localhost:27017/dd_db
  // In Docker, we override via MONGO_URI env variable to use host "mongo"
  url: process.env.MONGO_URI || "mongodb://localhost:27017/dd_db"
};
