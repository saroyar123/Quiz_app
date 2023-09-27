const user = require("../Model/user");
const emailValidator = require("deep-email-validator");
const jwt = require("jsonwebtoken");

// create user account
exports.createUser = async (req, res) => {
  try {
    console.log("call")
    // Destructure the request body
    const { name, email, password } = req.body;
    // validiate the user give a valid email
    const { valid } = await emailValidator.validate(email);

    console.log(email,name,password)

    if (!valid) throw new Error("Please give a valid mail");

    //   create user in the database
    const User = await user.create({ name, email, password });

    const token = jwt.sign({ email: email }, process.env.jwtSecret);
    res.status(201).json({
      success: true,
      User,
      token,
    });
  } catch (error) {
    // handeling the error
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// user login method
exports.logIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const User = await user.findOne({ email: email }).select("+password");

    if (!User) throw new Error("User not found");

    if (!User.comparePassword(password)) throw new Error("Wrong password");

    const token = jwt.sign({ email: email }, process.env.jwtSecret);

    res.status(200).json({
      success: true,
      User,
      token,
    });
  } catch (error) {
    // handeling the error
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      user: req.user,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: error.message,
    });
  }
};
