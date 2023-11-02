const { UserService } = require("../services/userService");

const log = require("debug")("api:controller:user");

class UserController {
  findAll(req, res) {
    const users = UserService.findAll();

    log(users);

    return res.send([users]);
  }
}

module.exports = { UserController: new UserController() };
