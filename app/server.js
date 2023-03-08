// step 0 : import commonjs packajes => install mongodb and run it

//step 1 :  import commonjs packajes
// const express = require("express");
const http = require("http");
const path = require("path");
// step 26 : import routere asli 
const { allRoutes } = require("./router/router");

// step 2 : create constructor
module.exports = class Application {
  #express = require("express");
  #app = this.#express();
  constructor(PORT, DB_URL) {
    // step 4 : call the methods tartibesh mohemme masalan hatman erroHandler bad az createRoutes bashe
    this.configDatabase(DB_URL);
    this.configApplication();
    this.createRoutes();
    this.createServer(PORT);
    this.errorHandler();
  }
  // step 3 : create methods for config the proj

  configDatabase(DB_URL){
    const mongoose = require("mongoose");
    mongoose.set('strictQuery', true);
    mongoose.connect(DB_URL, (error) => {
        // if(error) throw error ;
        if(error ){
          console.log("error ------------------->" , error)
          return true ;
        }
        return console.log("mongoose Connected to mongoDB successfully ...")
    })
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
    server.listen(PORT, () => console.log(`server runed on poooooooooort :${PORT}`));
  }
  createRoutes() {
    // step 10 : create route
    // in vase safheie asli
    this.#app.get("/", (req, res, next) => {
      return res.json({
        message: "this is a neww express applications",
      });
    });
    // step 27 :
    // az try catch estefade kon k age b error khord error ro next kone
    // va dar vorodi hatman err ro ham kenare req , res , next vared kon k ye middleware kamel beshe va age err dashti 404 kar kone age error dashti
    // iani tamame route ah dar allRoutes miad va ejra mishe age b har dalili b error khord on error ro next mikone masalan 404
    this.#app.use(allRoutes)
  }
  errorHandler() {
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
