const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

////The environment variable for your connection string goes here////
let mongoDB = proces.dotenv.MONGO_DB_CONNECTION_STRING;
// Make sure to create .env file and use an environment variable

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose.connection;
