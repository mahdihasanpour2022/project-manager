
// step 1 : import commonjs packajes
// const express = require("express");
const http = require("http");
const path = require("path");


// step 2 : create constructor
module.exports = class Application {
  #express = require("express");
  #app = this.#express();
  constructor(PORT, DB_URL) {
    // step 4 : call the methods
    this.configDatabase(DB_URL);
    this.configApplication();
    this.createServer(PORT);
    this.createRoutes();
    this.errorHndler();
  }
  // step 3 : create methods for config the proj
  configDatabase(DB_URL) {
    // step 5 : connect to DB
    const mongoose = require("mongoose");
    mongoose.connect(DB_URL, (error) => {
      if (error) throw error;
      return console.log("successfully connected to DB ... ");
    });
  }
  configApplication() {
    // step 9 : config application
    this.#app.use(this.#express.json());
    this.#app.use(this.#express.urlencoded({ extended: true }));
    this.#app.use(this.#express.static(path.join(__dirname, "..", "public")));
  }
  createServer(PORT) {
    // step 8 : create http server
    const server = http.createServer(this.#app);
    server.listen(PORT, () => console.log(`server runed on port :${PORT}`));
  }
  createRoutes() {
    // step 10 : create route
    this.#app.get("/", (req, res, next) => {
      return res.json({
        message: "this is a new express applications",
      });
    });
  }
  errorHndler() {
    // step 6 : create endpoint for error 404
    this.#app.use((req, res, next) => {
      return res.status(404).json({
        status: 404,
        success: false,
        message: "this route not found ... ",
      });
    });
    // step 7 : create endpoint for error 500
    this.#app.use((error, res, req, next) => {
      const status = error?.status || 500;
      const message = error?.message || "internal server error";
      return res.status(status).json({
        status: status, // or just status
        success: false,
        message: message, // or just message
      });
    });
  }
}
