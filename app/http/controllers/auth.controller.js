// step 28 : create app > public > controller
// create (user.controller.js & project.controller.js & team.controller.js & auth.controller.js) va baraie har model yek controller misazim ba hamon nam
// b sotate object oriented kar mikonim va methodhaie to in controller ha ro b router ha moarefi mikonim
// baraie auth model yek controller misazim ba hamon nam

const { userModel } = require("../../models/user");
const { hashString } = require("../../modules/functions");

class AuthController {
  // step 29 : create method bar asase oop (object oriented programing) iani ba class
  // vaghti vorodihat shamele ( req / res / next ) ye middleware mamolie ba req shoma joiate darkhste karbar mesle body ro darin
  // ba ijade darkhast(req) mire to model bad miad to controleer bad mire to route

  async register(req, res, next) {
    try {
      const { userName, email, password, mobile } = req.body;
      // STEP 45: HASH PASSWORD
      const hash_Password = hashString(password);
      // step 46 : ijade user az usermodel
      const user = await userModel.create({
        userName,
          email,
          password: hash_Password,
          mobile,
        })
        // step 47 : ijade catch bedone try injorie catch((err)=>{})      na    catch(err){}
        .catch((err) => {
          // console.log(JSON.stringify(err , null , 2));
          // console.log(err)
          if (err?.code === 11000){
            throw {
              status: 400,
              message: "ye meghdare gheire uniq va tekrari dar body hast",
            };
          }
        });
      return res.json(user);
    } catch (err) {
      next(err);
    }
  }
  login() {}
  resetPassword() {}
}
// way 1 : module.exports = {AuthController}
// dar in halat har jaie estefade beshe va azesh ye instance besaze dar sanade dige chon ye bakhshi az hafeze ro eshghal mikone dar har bar sakhte instanse ,in kar baes mishe proje sangin mishe pas ...
//pas ma miaim va dar hamin lahzie expoet class azesh ye instance misazim
// way 2 :
module.exports = { AuthController: new AuthController() };
