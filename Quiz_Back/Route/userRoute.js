const {Router}=require("express");
const { createUser, logIn, getUser } = require("../Methods/userMethods");
const { userAuth } = require("../config/Auth");

const router=Router();
 router.route("/user").post(createUser).get(userAuth,getUser);
 router.post("/login",logIn)



 module.exports=router