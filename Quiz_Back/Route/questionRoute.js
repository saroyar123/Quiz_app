const {Router}=require("express");
const { getAllQuestion } = require("../Methods/questionMethods");
const { userAuth } = require("../config/Auth");

const router=Router();
router.route("/question").get(userAuth,getAllQuestion);

module.exports=router;