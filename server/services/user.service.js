const Users = require("../models/user-model");

class UserService {
  findAll = async () => {
    const userResult = await Users.find({});
    return userResult;
  };
}

module.exports = UserService;
