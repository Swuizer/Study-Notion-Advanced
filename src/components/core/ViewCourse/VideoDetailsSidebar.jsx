import React, { useEffect, useState } from 'react'
import { BsChevronDown } from "react-icons/bs"
import { IoIosArrowBack } from "react-icons/io"
import { useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import IconBtn from '../../common/IconBtn';

export default function VideoDetailsSidebar({ setReviewModal }){
    // {console.log("Data 2.0 ----> ", setReviewModal)}
    const [activeStatus, setActiveStatus] = useState("");
    const [videobarActive, setVideobarActive] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const {sectionId, subSectionId} = useParams();
    const {
        courseSectionData,
        courseEntireData,
        totalNoOfLectures,
        completedLectures,
    } = useSelector((state) => state.viewCourse)

    useEffect(() => {
        ;(() => {
            if(!courseSectionData.length)
                return;

            const currentSectionIndex = courseSectionData.findIndex(
                (data) => data._id === sectionId
            )

            const currentSubSectionIndex = courseSectionData?.[currentSectionIndex]?.subSection.
                findIndex((data) => data._id === subSectionId)

            const activeSubSectionId = courseSectionData[currentSectionIndex]?.subSection?.[currentSubSectionIndex]?._id;

            setActiveStatus(courseSectionData?.[currentSectionIndex]?._id);
            setVideobarActive(activeSubSectionId);
        })()
    }, [courseSectionData, courseEntireData, location.pathname])

  return (
    <>
        <div className='tflex h-[calc(100vh-3.5rem)] w-[320px] max-w-[350px] flex-col border-r-[1px] border-r-richblack-700 bg-richblack-800'>
            {/* For button and heading  */}
            <div className='mx-5 flex flex-col items-start justify-between gap-2 gap-y-4 border-b border-richblack-600 py-5 text-lg font-bold text-richblack-25'>
                {/* For button */}
                <div className='flex w-full items-center justify-between'>
                    <div 
                        onClick={() => {
                            navigate("/dashboard/enrolled-courses")
                        }}
                        className='flex h-[35px] w-[35px] items-center rounded-full bg-richblack-100 p-1 text-richblack-700 hover:scale-90'
                    >
                        <IoIosArrowBack size={30} /> Back
                    </div>
                    <IconBtn
                        text="Add Review"
                        customClasses="ml-auto"
                        onclick={() => setReviewModal(true)}
                    />
                    
                </div>
                {/* For heading or title */}
                <div className='flex flex-col'>
                    <p>{courseEntireData?.courseName}</p>
                    <p className='text-sm font-semibold text-richblack-500'>
                        {completedLectures?.length} / {totalNoOfLectures}
                    </p>
                </div>
            </div>

            {/* For section and subSection */}
            <div className='h-[calc(100vh - 5rem)] overflow-y-auto'>
                {courseSectionData.map((section, index) => (
                    <div
                      className='mt-2 cursor-pointer text-sm text-richblack-5'
                      onClick={() => setActiveStatus(section?._id)}
                      key={index}
                    >
                        {/* Section */}
                        <div className='flex flex-row justify-between bg-richblack-600 px-5 py-4'>
                            <div className='w-[70%] font-semibold'>
                                {section?.sectionName}
                            </div>
                            <div className='flex items-center gap-3'>
                                <span
                                    className={`${
                                        activeStatus === section?.sectionName
                                          ? "rotate-0"
                                          : "rotate-180" 
                                    } transition-all duration-500`}
                                >
                                    <BsChevronDown />
                                </span>
                            </div>

                        </div>

                        {/* SubSections */}
                        <div>
                            {activeStatus === section?._id && (
                                <div className='transition-[height] duration-500 ease-in-out'>
                                    {section.subSection.map((topic, index) => (
                                        <div
                                            className={`flex gap-3 px-5 py-2 ${
                                                videobarActive === topic._id 
                                                ? "bg-yellow-200 font-semibold text-richblack-800"
                                                : "hover:bg-richblack-900"
                                            }`}
                                            key={index}
                                            onClick={() => {
                                                navigate(
                                                    `/view-course/${courseEntireData?._id}/section/${section?._id}/sub-section/${topic?._id}`
                                                )
                                                setVideobarActive(topic?._id);
                                            }}
                                        >
                                        <input
                                            type='checkbox'
                                            checked={completedLectures.includes(topic?._id)}
                                            onChange={() => {}}
                                        />
                                        {topic.title}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                  </div>
                ))}
            </div>
        </div>
    </>
  )
}

