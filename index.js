// step 11 :
const Application = require("./app/server");
const DB_URL = "mongodb://localhost:27017/ProjectManagerDB";
new Application(3100, DB_URL)