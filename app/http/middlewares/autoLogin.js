const { userModel } = require("../../models/user");
const { jwtTokenVerify } = require("../../modules/functions");

// step 62 :
async function autoLogin (req, res, next)  {
 try{
  const authorization = req?.headers?.authorization;
  console.log("req?.headers?.authorization :",authorization);

  if (!authorization)
    throw { status: 401, message: "لطفا وارد حساب کاربری خود شوید" };
  const token = authorization.split(" ")?.[1];
  if (!token) throw { status: 401, message: "لطفا وارد حساب کاربری خود شوید" };
  const result = jwtTokenVerify(token);
  console.log(result);
  const { userName } = result ;
  // chon client b pass niaz nadare mizarimesh 0
  const user = await userModel.findOne({userName} , {password : 0});
  if(!user) throw { status: 401, message: "لطفا وارد حساب کاربری خود شوید" };
req.user = user ;
return next();
 }catch(error){
next(error);
 }
};
module.exports = {autoLogin};
