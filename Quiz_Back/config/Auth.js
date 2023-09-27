const jwt=require("jsonwebtoken");
const user = require("../Model/user");

exports.userAuth=async(req,res,next)=>{
    try {
        const token=req.headers.authorization.split(" ")[1];
        if(!token)
        throw new Error("Token not found");

        const {email}=jwt.verify(token,process.env.jwtSecret);
        const User=await user.findOne({email:email});

        if(!user)
        throw new Error("User not found");

        req.user=User;
        next();


    } catch (error) {
        // next()
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}