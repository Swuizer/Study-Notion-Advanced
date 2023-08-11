const CourseProgress = require("../models/CourseProgress")
const SubSection = require("../models/SubSection")

exports.updateCourseProgress = async(req, res) => {
    const { courseId, subSectionId } = req.body
    const userId = req.user.id

    try{
        const subSection = await SubSection.findById(subSectionId);
        if(!subSection){
            return res.status(404).json({ error: "Invalid subSection" })
        }
        
        // Find the course progress document for the user and course
        let courseProgress = await CourseProgress.findOne({
            courseID:courseId,
            userId:userId,
        });
       
        if(!courseProgress){
            return res.status(404).json({
                success: false,
                message: "Course progress Does Not Exist"
            })
        } else {
            console.log("Course Progress Validation Done");
            if(courseProgress.completedVideos.includes(subSectionId)){
                return res.status(400).json({ error: "Sub-section already completed" })
            }

            // Push the subsection into the completedVideos array
            courseProgress.completedVideos.push(subSectionId)
        }
        
        // Save the updated course progress
        await courseProgress.save()
        
        return res.status(200).json({ 
            success:true,
            message:"Course Progress Updated Successfully",
        })
    } catch (error){
        console.log(error)
        return res.status(400).json({ error: "Internal server error" })
    }
}