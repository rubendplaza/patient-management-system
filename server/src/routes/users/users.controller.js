/**
 * This file performs the login logic for user using data from the database.
 */
const {
  registerNewUser,
  getUserIfExisting,
} = require("../../models/users/users.model");

// Receiving from front end:
/**
 * body: {
 *  name:
 *  email:
 *  password:
 * }
 */

async function httpLoginUser(req, res) {
  const userInfo = req.body;
  if (!userInfo.name || !userInfo.email || !userInfo.password) {
    return res.status(400).json({
      error: "Missing required user information.",
    });
  }

  try {
    // The information used to login.
    const userReceived = {
      email: userInfo.email,
      password: userInfo.password,
    };

    const userFromDB = await getUserIfExisting(userReceived);

    // If user info coming from client does not match a user in the DB, the model
    // will return empty object so obviously this will fail, return error.
    if (!userFromDB.email) {
      return res.status(400).json({
        error: "Email or password is incorrect.",
      });
    }

    // If we get a user back from the DB, then we have to check if passwords match.
    // TODO: Check passwords.
    // TODO: Implement user model methods.
  } catch (err) {
    return res.status(500).json({
      error: "Could not login user.",
    });
  }
}

async function httpRegisterUser(req, res) {
  const userInfo = req.body;
  if (!userInfo.name || !userInfo.email || !userInfo.password) {
    return res.status(400).json({
      error: "Missing required user information.",
    });
  }

  try {
    const user = {
      name: userInfo.name,
      email: userInfo.email,
      password: userInfo.password,
    };

    await registerNewUser(user);
    return res.status(201).json(user);
  } catch (err) {
    return res.status(500).json({
      error: "Could not register user.",
    });
  }
}

module.exports = {
  httpLoginUser,
  httpRegisterUser,
};
