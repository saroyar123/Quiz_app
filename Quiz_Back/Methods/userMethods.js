const user = require("../Model/user");
const emailValidator = require("deep-email-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// create user account
exports.createUser = async (req, res) => {
  try {
    // console.log("call")
    // Destructure the request body
    const { name, email, password } = req.body;
    // validiate the user give a valid email
    const { valid } = await emailValidator.validate(email);

    // console.log(email, name, password, valid);
// 
    if (!valid) throw new Error("Please give a valid mail");

    //   create user in the database
    const User = await user.create({ name, email, password });
    // console.log(User)

    // const token = jwt.sign({ email: email }, process.env.jwtSecret);
    res.status(201).json({
      success: true,
      message: "User created,Go to login",
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
    // console.log(User.password);

    const flag = await bcrypt.compare(password, User.password);
    // console.log(flag);
    if (!flag) throw new Error("wormg Password");

    const token = jwt.sign({ email: email }, process.env.jwtSecret);

    res.status(200).json({
      success: true,
      message: "YOu are login",
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

// working on the quiz result
// Update the score
exports.updateScore = async (req, res) => {
  try {
    // console.log("call")
    const { score } = req.body;
    // console.log(score)
    req.user.score += parseInt(score);
    await req.user.save();
    res.status(200).json({
      success: true,
      message: "Score Update",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get the login user information
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

// get all user score
exports.getAllUser = async (req, res) => {
  try {
    const Users=await user.find().sort({score:-1});
    let preval=-1;
    let currank=0;
    // const rankUser=[];
  const  rankUser=Users.map((value)=>{
       if(value.score!=preval)
       {
         preval=value.score;
         currank+=1;
       }
       return ({
        _id:value._id,
        name:value.name,
        score:value.score,
        rank:currank
    })

    })
    res.status(200).json({
      success:true,
      rankUser
    })
  } catch (error) {
    res.status(200).json({
      success: false,
      message: error.message,
    });
  }
};
