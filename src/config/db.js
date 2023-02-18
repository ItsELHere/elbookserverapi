const db = require("mongoose");

db.set("strictQuery", false);
db.connect(process.env.MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

setTimeout(() => {
  console.log(`DB Status Code : ${db.connection.readyState}`);
}, 3000);

module.exports = db;
