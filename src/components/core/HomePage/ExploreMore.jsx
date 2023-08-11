import React from 'react'
import  {HomePageExplore} from "../../../data/homepage-explore"
import HighLightText from './HighLightText';
import { useState } from 'react';
import CourseCard from './CourseCard';


const tabsName = [
    "Free",
    "New to coding",
    "Most popular",
    "Skills paths",
    "Career paths",
];

const ExploreMore = () => {

    const [currentTab, setCurrentTab] = useState(tabsName[0]);
    const [courses, setCourses] = useState(HomePageExplore[0].courses);
    const [currentCard, setCurrentCard] = useState(HomePageExplore[0].courses[0].heading)

    const setMyCards = (value) => {
        setCurrentTab(value);
        const result = HomePageExplore.filter((course) => course.tag === value);
        setCourses(result[0].courses);
        setCurrentCard(result[0].courses[0].heading);
    }


  return (
    <div className='mb-10'>
      {/* Explore more section */}
      <div>
        <div className='text-4xl font-semibold text-start lg:text-center my-10'>
          Unlock the 
          <HighLightText text={"Power of Code"} />
          <p className='text-start lg:text-center text-richblack-300 text-lg font-semibold mt-1'>
          Learn to build anything you can imagine
          </p>
        </div>
      </div>
      {/* <p className='text-center text-richblack-300 text-sm text-[16px] mt-3'></p>   */}

      <div className='hidden lg:flex gap-5 -mt-5 mx-auto w-max bg-richblack-800 text-richblack-200 p-1 rounded-full font-medium flex-row drop-shadow-[0_1.5px_rgba(255,255,255,0.25)]'>
      {tabsName.map( (element, index) => {
        return (
          <div
            className={`text-[16px] flex flex-row items-center gap-2 
                ${currentTab === element 
                ? "bg-richblack-900 text-richblack-5 font-medium"
                : "text-richblack-200" } px-7 py-[7px] rounded-full transition-all duration-200 cursor-pointer
                hover:bg-richblack-900 hover:text-richblack-5`}
                key={index}
            onClick={() => setMyCards(element)}
          >
            {element}
          </div>
        )
      })}
      </div>

      <div className='hidden lg:block lg:h-[200px]'></div>

      {/* course card ka group */}
      <div className='lg:absolute gap-10 justify-center lg:gap-0 flex flex-row lg:justify-between flex-wrap w-full lg:bottom-[0] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[50%] text-black lg:mb-0 -mb-[200px] lg:px-0 -ml-[10px]'>
          {courses.map(  (element, index) => {
                  return (
                      <CourseCard 
                      key={index}
                      cardData = {element}
                      currentCard = {currentCard}
                      setCurrentCard = {setCurrentCard}
                      />
                  )
          })}
      </div>

    </div>
  )
}

export default ExploreMore
