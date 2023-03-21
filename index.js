// step 11 :
const Application = require("./app/server");
const DB_URL = "mongodb://localhost:27017/ProjectManagerDB1";
// step 58 : dotenv
require("dotenv").config();
new Application(3000, DB_URL)
