// step 32 : 
//  baraie team model yek controller misazim ba hamon nam
// b sotate object oriented kar mikonim va methodhaie to in controller ha ro b router ha moarefi mikonim

class TeamController {
  // step 33 : create method bar asase oop (object oriented programing) iani ba class
  createTeam() {

  }
  inviteUserToTeam() {

  }
  removeTeamById() {

  }
  updateTeam() {

  }

};
// way 1 : module.exports = {TeamController}
// dar in halat har jaie estefade beshe va azesh ye instance besaze dar sanade dige chon ye bakhshi az hafeze ro eshghal mikone dar har bar sakhte instanse ,in kar baes mishe proje sangin mishe pas ...
//pas ma miaim va dar hamin lahzie expoet class azesh ye instance misazim
// way 2 :
module.exports = { TeamController: new TeamController() }