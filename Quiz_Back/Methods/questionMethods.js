const Question = require("../Model/question")

exports.getAllQuestion=async(req,res)=>{
try {
    // console.log("call")
    let {language,limit}=req.query;
    // console.log(typeof(limit))
    const question= await Question.aggregate([
        { $match: { language: language } }, // Filter by English language
        { $sample: { size: parseInt(limit) } }, // Get 5 random questions
      ]);
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