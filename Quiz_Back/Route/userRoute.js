const {Router}=require("express");
const { createUser, logIn, getUser, updateScore, getAllUser } = require("../Methods/userMethods");
const { userAuth } = require("../config/Auth");

const router=Router();
 router.route("/user").post(createUser).get(userAuth,getUser);
 router.route("/score").post(userAuth,updateScore)
 router.post("/login",logIn)
 router.get("/alluser",userAuth,getAllUser)



 module.exports=router