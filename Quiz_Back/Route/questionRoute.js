const {Router}=require("express");
const { getAllQuestion } = require("../Methods/questionMethods");

const router=Router();
router.route("/question").get(getAllQuestion);

module.exports=router;