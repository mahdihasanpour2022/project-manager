// step 28 : create app > public > controller
// create (user.controller.js & project.controller.js & team.controller.js & auth.controller.js) va baraie har model yek controller misazim ba hamon nam
// b sotate object oriented kar mikonim va methodhaie to in controller ha ro b router ha moarefi mikonim
// baraie auth model yek controller misazim ba hamon nam

class AuthController {
  // step 29 : create method bar asase oop (object oriented programing) iani ba class
  register() {

  }
  login() {

  }
  resetPassword() {

  }
}
// way 1 : module.exports = {AuthController}
// dar in halat har jaie estefade beshe va azesh ye instance besaze dar sanade dige chon ye bakhshi az hafeze ro eshghal mikone dar har bar sakhte instanse ,in kar baes mishe proje sangin mishe pas ...
//pas ma miaim va dar hamin lahzie expoet class azesh ye instance misazim
// way 2 :
module.exports = { AuthController: new AuthController() }