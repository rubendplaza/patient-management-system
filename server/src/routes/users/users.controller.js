/**
 * This file performs the login logic for user using data from the database.
 */
const {
  registerNewUser,
  getUserByEmail,
} = require("../../models/users/users.model");
const { addPatient } = require("../../models/patients/patients.model");
const { addDoctor } = require("../../models/doctors/doctors.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
require("dotenv").config();

// Receiving from front end:
/**
 * {
 *  name: string
 *  email: string
 *  password: string
 *  isDoctor: boolean
 *  doctorName: string
 * }
 */

async function httpLoginUser(req, res) {
  const userInfo = req.body;
  if (!userInfo.email || !userInfo.password) {
    return res.status(400).json({
      error: "Missing required user information.",
    });
  }

  try {
    // The information used to login.
    const emailReceived = userInfo.email;
    const passwordReceived = userInfo.password;

    const userFromDB = await getUserByEmail(emailReceived);

    // If user info coming from client does not match a user in the DB, the model
    // will return empty object so obviously this will fail, return error.
    if (!userFromDB.email) {
      return res.status(400).json({
        error: "Email or password is incorrect.",
      });
    }

    // If email exists, but password doesn't this is a server error.
    if (!userFromDB.password) {
      return res.status(500).json({
        error: "Error logging in.",
      });
    }

    // If we get a user back from the DB, then we have to check if passwords match.
    const passwordIsValid = await bcrypt.compare(
      passwordReceived,
      userFromDB.password
    );

    if (passwordIsValid) {
      const token = jwt.sign(
        {
          name: userFromDB.name,
          email: userFromDB.email,
        },
        process.env.JWT_SECRET
      );

      return res.status(200).json({
        success: true,
        token: token,
        name: userFromDB.name,
        email: userFromDB.email,
        id: userFromDB.id,
      });
    } else {
      return res.status(400).json({
        error: "Email or password is incorrect.",
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      error: "Could not login user.",
    });
  }
}

async function httpRegisterUser(req, res) {
  const userInfo = req.body;
  // Check that we were given the information needed.
  if (!userInfo.name || !userInfo.email || !userInfo.password) {
    return res.status(400).json({
      error: "Missing required user information.",
    });
  }

  // Need to know if user is doctor or patient.
  if (userInfo.isDoctor === null || userInfo.isDoctor === undefined) {
    return res.status(400).json({
      error: "Tell me if you're a doctor or not.",
    });
  }

  // Check for whether doctor or patient
  if (userInfo.isDoctor == "false" && !userInfo.doctorName) {
    // Malformed patient object
    return res.status(400).json({
      error: "Missing required patient information.",
    });
  }

  if (userInfo.isDoctor == "true" && userInfo.doctorName) {
    // Malformed doctor object
    return res.status(400).json({
      error: "Missing required doctor information.",
    });
  }

  // If user tries to register with an existing user, return server error without
  // describing why we couldn't register as to not expose information about our users.
  const userFromDB = await getUserByEmail(userInfo.email);
  if (userFromDB !== null) {
    return res.status(500).json({
      error: "Could not register user.",
    });
  }

  try {
    // Register as patient or doctor and store that ID in user.

    // Is patient:
    let newEntity;
    let id;
    if (!userInfo.isDoctor) {
      newEntity = {
        name: userInfo.name,
      };
      id = await addPatient(newEntity);
    }

    // Is doctor:
    else if (userInfo.isDoctor) {
      newEntity = {
        name: userInfo.name,
      };
      id = await addDoctor(newEntity);
    }

    const hashedPassword = await bcrypt.hash(userInfo.password, 10);

    const user = {
      name: userInfo.name,
      email: userInfo.email,
      password: hashedPassword,
      id: id._id,
    };

    await registerNewUser(user);
    return res.status(201).json({
      success: true,
      name: userInfo.name,
      email: userInfo.email,
      id: user.id,
    });
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
