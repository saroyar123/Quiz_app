const Question = require("../Model/question")

exports.getAllQuestion=async(req,res)=>{
try {
    let {language}=req.params;
    const question=await Question.find({language:language});
    res.status(200).json({
        success:true,
        question
    })
} catch (error) {
    res.status(400).json({
        success:false,
        message:error.message
    })
}
}