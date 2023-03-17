// step 12.5 :create 3 file in model folder (project , user , team)
// ma 3 ta model misazim k sakhtaneshom eine hame
// step 12 :
const mongoose = require("mongoose");
// step 13 : create schema instance through mongoose
const userSchema = new mongoose.Schema(
  {
    // unique means that just can one user name for each user
    // require  meand that neccessary
    //default iani meghdare pish farz vasash bzar
    //onaie k ghabele edit hastand nabaiad uniq bashand
    //string na string (pascal)

    userName: { type: String, required: true, unique: true },
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    mobile: { type: String, required: true, unique: true },
    team: { type: [String], default: [] },
    skills: { type: [String], default: [] },
    roles: { type: [String], default: ["USERS"] }, // kolan maghadire pishfarzo baiad bozorg benevisi esmesho
    token: { type: String, default: "" },
    // gereftan akharin tarikhe viraieshe kala
  },
  { timestamps: true }
);

// step 14  : create name for model
const userModel = mongoose.model("user", userSchema);

// step 15 :
// export model ==> hala az in be bad har ja esmesho biari import mishe
module.exports = { userModel };
