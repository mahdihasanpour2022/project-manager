// step 34 :
//  baraie user model yek controller misazim ba hamon nam
// b sotate object oriented kar mikonim va methodhaie to in controller ha ro b router ha moarefi mikonim

class UserController {
  // step 35 : create method bar asase oop (object oriented programing) iani ba class

  // step 59 :  google  kon robo 3t in site =>https://robomongo.org/
  // step 60 : vaghti user dorost bashe dar req data user ror zakhire mikonim
  getProfile(req,res , next) {
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
  editProfile() {}
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
