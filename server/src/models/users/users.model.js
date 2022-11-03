const users = require("./users.mongo");

async function registerNewUser(user) {
  await users.create(user);
}

async function getUserByEmail(email) {
  return await users.findOne({
    email: email,
  });
}

module.exports = {
  registerNewUser,
  getUserByEmail,
};
