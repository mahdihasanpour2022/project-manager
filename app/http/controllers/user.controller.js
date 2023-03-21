// step 34 :
//  baraie user model yek controller misazim ba hamon nam
// b sotate object oriented kar mikonim va methodhaie to in controller ha ro b router ha moarefi mikonim

const { userModel } = require("../../models/user");

class UserController {
  // step 35 : create method bar asase oop (object oriented programing) iani ba class

  // step 59 :  google  kon robo 3t in site =>https://robomongo.org/
  // step 60 : vaghti user dorost bashe dar req data user ror zakhire mikonim
  getProfile(req, res, next) {
    try {
      const user = req.user;
      return res.status(200).json({
        status: 200,
        success: true,
        user,
      });
    } catch (error) {
      next(error);
    }
  }
  // step 66 :
  async editProfile(req, res, next) {
    try {
      // chon modam gharare taghier kone baiad bzari let na const
      let data = req.body;

      const userID = req.user._id;
      console.log("user controller line 31 userID :",userID);

      let fields = ["firstName", "lastName", "skills"];
      let badValues = ["", " ", null, undefined, 0, -1, NaN , [] , {} ];

      Object.entries(data).forEach(([key, value]) => {
        //vase inke faghat hamin 3 ta parametr ro bgire
        if (!fields.includes(key)) delete data[key];
        if (badValues.includes(value)) delete data[key];
      });

      // console.log("in line 42 userController data :", data);
      const result = await userModel.updateOne({ _id: userID }, { $set: data });
      if (result.modifiedCount > 0) {
        return res.status(200).json({
          status: 200,
          success: true,
          message: "بروز رسانی موفق پروفایل یوزر",
        });
      }
      throw {
        status: 400,
        success: false,
        message: "بروز رسانی ناموفق پروفایل یوزر",
      };
    } catch (error) {
      next(error);
    }
  }
  addSkills() {}
  editSkills() {}
  acceptInviteInTeam() {}
  rejectInviteInTeam() {}
}
// way 1 : module.exports = {UserController}
// dar in halat har jaie estefade beshe va azesh ye instance besaze dar sanade dige chon ye bakhshi az hafeze ro eshghal mikone dar har bar sakhte instanse ,in kar baes mishe proje sangin mishe pas ...
//pas ma miaim va dar hamin lahzie expoet class azesh ye instance misazim
// way 2 :
module.exports = { UserController: new UserController() };
