// step 16 :
const mongoose = require("mongoose");
// step 17 : create schema instance through mongoose pascal
const teamSchema = new mongoose.Schema(
  {
    // unique means that just can one user name for each user
    // require  meand that neccessary
    //default iani meghdare pish farz vasash bzar
    //onaie k ghabele edit hastand nabaiad uniq bashand
    name : {type:string , required : true},
    desription : {type:string , required : true},
    //chon users shamele koli user mishe ye arraye midim
    user : {type:[mongoose.Types.ObjectId] , default : []},
    // az ObjectId k male mongoose vase id dadan estefade mikonim
    owner : {type :mongoose.Types.ObjectId , required : true  , }
    // gereftan akharin tarikhe viraieshe kala
  },
  { timestamps: true }
);

// step 18  : create name for model
const teamModel = mongoose.model("team", teamSchema);

// step 19 :
// export model ==> hala az in be bad har ja esmesho biari import mishe
module.exports = { teamModel };
