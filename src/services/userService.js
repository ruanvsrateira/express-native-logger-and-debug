const log = require("debug")("api:service:user");

class UserService {
  findAll() {
    const users = [
      {
        name: "Ruan",
        email: "ruan@ruan.com",
      },
      {
        name: "Ruan",
        email: "ruan@ruan.com",
      },
    ];

    log(users);

    return users;
  }
}

module.exports = { UserService: new UserService() };
