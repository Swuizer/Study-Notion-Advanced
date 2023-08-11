import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useParams } from 'react-router-dom'
import VideoDetailsSidebar from '../components/core/ViewCourse/VideoDetailsSidebar'
import CourseReviewModal from '../components/core/ViewCourse/CourseReviewModal'

import { 
    setCompletedLectures, 
    setCourseSectionData, 
    setEntireCourseData, 
    setTotalNoOfLectures, 
} from '../slices/viewCourseSlice'
import { getFullDetailsOfCourse } from '../services/operations/courseDetailsAPI'

export default function ViewCourse(){

    const { courseId } = useParams()
    const { token } = useSelector((state) => state.auth)
    const dispatch = useDispatch();
    const [reviewModal, setReviewModal] = useState(false)

    useEffect(() => {
        const setCourseSpecificDetails = async() => {
            const coursedata = await getFullDetailsOfCourse(courseId, token)
            dispatch(setCourseSectionData(coursedata.courseDetails.courseContent))
            dispatch(setEntireCourseData(coursedata.courseDetails))
            dispatch(setCompletedLectures(coursedata.completedVideos))
            let lectures = 0;
            coursedata?.courseDetails?.courseContent?.forEach((sec) => {
                lectures += sec.subSection.length
            })
            dispatch(setTotalNoOfLectures(lectures))
        }
        setCourseSpecificDetails();
    },[])

  return (
    <>
        <div className='relative flex min-h-[calc(100vh-3.5rem)]'>
            <VideoDetailsSidebar setReviewModal={setReviewModal}/>
            <div className="h-[calc(100vh-3.5rem)] flex-1 overflow-auto">
                <div className="mx-6">
                    <Outlet/>
                </div>
            </div>
        </div>
        {reviewModal && <CourseReviewModal setReviewModal={setReviewModal}/> }
    </>
  )
}

