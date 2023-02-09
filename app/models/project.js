// step 16 :
const mongoose = require("mongoose");
// step 17 : create schema instance through mongoose pascal
const projectSchema = new mongoose.Schema(
  {
    // unique means that just can one user name for each user
    // require  meand that neccessary
    //default iani meghdare pish farz vasash bzar
    //onaie k ghabele edit hastand nabaiad uniq bashand
    title: { type: string, required: true },
    text: { type: string },
    // step 18 : create public folder and in public create upload and defaule folder iani masire ma az public shoro mishe hamise va ma ye axe pishfarz mizarim
    image: { type: string, default: "./assets/images/default/default.jpg" },
    owner: { type: mongoose.Types.ObjectId, required: true },
    team: { type: mongoose.Types.ObjectId },
    private: { type: boolean, default: true },

    // gereftan akharin tarikhe viraieshe kala
  },
  { timestamps: true }
);

// step 18  : create name for model
const projectModel = mongoose.model("team", projectSchema);

// step 19 :
// export model ==> hala az in be bad har ja esmesho biari import mishe
module.exports = { projectModel };
