// step 44 : function for hash string

const bcrypt = require("bcrypt")

//name functionha baiad camel bashe
function hashString(str){
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(str , salt)
};
module.exports = {hashString} ;