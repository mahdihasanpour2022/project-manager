// step 44 : function for hash string

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//name functionha baiad camel bashe
function hashString(str) {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(str, salt);
}
// step 54 : yarn add dotenv =>(be jaie inke ye sanad b name .env besazim az n estefade mikonim)
// in root => create .env

// step 56 : create jwt

// jwt.decode => bazyabi data az token
// jwt.verify => token monghazi shode ya na
// jwt.decode => sakhte token

function tokenGenerator(payload) {
  const token = jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: "3 days",
  });
  return token;
}

//step 61 : jwt verify token
function jwtTokenVerify(token) {
  const result = jwt.verify(token, process.env.SECRET_KEY);
  if (!result?.userName)
    throw { status: 401, message: "لطفا وارد حساب کاربری خود شوید" };
  return result;
}

module.exports = {
  hashString,
  tokenGenerator,
  jwtTokenVerify,
};
