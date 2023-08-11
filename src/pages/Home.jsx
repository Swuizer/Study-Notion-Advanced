import React from 'react'
import { Link } from 'react-router-dom'

import { FaArrowRight } from 'react-icons/fa';
import HighLightText from '../components/core/HomePage/HighLightText';
import CTAButton from '../components/core/HomePage/Button';
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from '../components/core/HomePage/CodeBlocks';
import TimeLineSection from '../components/core/HomePage/TimelineSection';
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection';
import InstructorSection from '../components/core/HomePage/InstructorSection';
import ExploreMore from '../components/core/HomePage/ExploreMore';
import Footer from "../components/common/Footer";
import ReviewSlider from '../components/common/ReviewSlider';


const Home = () => {
  return (
    <div>
        {/* Section 1 */}
        <div className='relative mx-auto flex w-11/12 max-w-maxContent flex-col items-start lg:items-center 
        justify-between gap-8 text-white'>

            <Link to={"/signup"}>

                <div className='group mx-auto mt-16 w-fit rounded-full bg-richblack-800 p-1 font-bold 
                text-richblack-200 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none'>
                    <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900'>
                        <p>Beacome an Instructor </p>
                        <FaArrowRight/>
                    </div>
                </div>
            </Link>

            <div className='items-start lg:text-center text-3xl w-[90%] lg:w-full lg:text-4xl font-semibold'>
                Empower Your Future with 
                <HighLightText text={"Coding Skills"} />
            </div>

            <div className='-mt-3 w-[100%] lg:w-[65%] lg:mx-auto items-start lg:text-center font-inter text-base self-stretch leading-6 font-normal text-richblack-300'>
                With our online coding courses, you can learn at your own pace, 
                from anywhere in the world, and get access to a wealth of resources, 
                including hands-on projects, quizzes, and personalized feedback from instructors.
            </div>

            <div className='mt-8 flex flex-row gap-7'>
                <CTAButton active={true} linkto={"/signup"}>
                    Learn More
                </CTAButton>
                <CTAButton active={false} linkto={"/login"}>
                    Book a Demo
                </CTAButton>
            </div>

            <div className='mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200'>
                <video
                className='shadow-[20px_20px_rgba(255,255,255)]'
                muted
                loop
                autoPlay
                >
                    <source src={Banner} type='video/mp4'/>
                </video>
            </div>

            {/* Code Section 1 */}
            <div>
                <CodeBlocks
                    position={true}
                    heading={
                        <div className='text-4xl font-semibold'>
                            Unlock Your
                            <HighLightText text={"coding potential"}/>
                             with our online courses.
                        </div>
                    }
                    subheading={
                        `Our courses are designed and taught by industry experts who
                        have years of experience in coding and are passionate about
                        sharing their knowledge with you.`
                    }
                    ctabtn1={
                        {
                            btnText: "Try it Yourself",
                            linkto: "/signup",
                            active: true,
                        }
                    } 
                    ctabtn2={
                        {
                            btnText: "Learn More",
                            linkto: "/signup",
                            active: false,
                        }
                    }      
                    codeblock={`<!DOCTYPE html>\n <html>\n <head><title>Example</title><link rel="stylesheet" href="styles.css">\n</head>\n<body>\n<h1><a href="/">Header</a>\n</h1>\n<nav><a href="one/">One</a><a href="two/">Two</a><a href="three/">Three</a>\n</nav>`}
                    codeColor={"bg-gradient-to-r from-[#C5C7D4] via-[#D43D63] to-[#F37290] text-transparent bg-clip-text"}
                    active={false}
                />
                {/* <div className={`absolute lg:h-[257.054px] lg:w-[372.949px] z-11 blur-xl bg-gradient-to-tr from-[#8A2BE2] via-[#FFA500] to-[#F8F8FF] translate-x-[203%] translate-y-[-155%] opacity-[0.20000000298023224] rounded-full`}></div> */}
            </div>

             {/* Code Section 2 */}
             <div>
                <CodeBlocks
                    position={false}
                    heading={
                        <div className='w-[100%] text-4xl font-semibold lg:w-[50%]'>
                            Start
                            <HighLightText text={"coding in seconds"}/>
                        </div>
                    }
                    subheading={
                        "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
                    }
                    ctabtn1={
                        {
                            btnText: "Continue Lesson",
                            linkto: "/signup",
                            active: true,
                        }
                    } 
                    ctabtn2={
                        {
                            btnText: "Learn More",
                            linkto: "/signup",
                            active: false,
                        }
                    }      
                    codeblock={`<!DOCTYPE html>\n<html>\n<head><title>Example</title><link rel="stylesheet" href="styles.css">\n</head>\n<body>\n<h1><a href="/">Header</a>\n</h1>\n<nav><a href="one/">One</a><a href="two/">Two</a><a href="three/">Three</a>\n</nav>`}
                    codeColor={"bg-gradient-to-r from-[#C5C7D4] via-[#D43D63] to-[#F37290] text-transparent bg-clip-text"}
                    active={true}
                />
                {/* <div className={`absolute lg:h-[257.054px] lg:w-[372.949px] z-11 blur-xl bg-gradient-to-tr 
                        from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] lg:translate-x-[-8%] lg:translate-y-[-150%]
                        opacity-[0.20000000298023224;] rounded-full`}></div> */}
            </div>

            {/* Explore Section */}
            <ExploreMore/>
        </div>

        {/* Section 2 */}
        <div className='bg-pure-greys-5 text-richblack-700'>
            <div className='homepage_bg h-[310px]'>
                <div className='w-11/12 max-w-maxContent flex flex-col items-center justify-center gap-5 mx-auto'>
                    <div className='h-[180px]'></div>
                    <div className='flex flex-row gap-7 text-white'>
                        <CTAButton active={true} linkto={"/signup"}>
                            <div className='flex items-center gap-3'>
                                Explore Full Catalog
                                <FaArrowRight />
                            </div>
                        </CTAButton>
                        <CTAButton active={false} linkto={"/signup"}>
                            Learn More
                        </CTAButton>
                    </div>
                </div>
            </div>

            <div className='flex w-11/12 max-w-maxContent flex-col items-center justify-between 
            gap-8 mx-auto'>
                {/* Job that is in Demand - section 1 */}
                <div className='mb-10 flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0'>
                    <div className='text-3xl lg:text-4xl font-semibold w-[90%] lg:w-[45%]'>
                        Get the Skills you need for a
                        <HighLightText text={"Job that is in demand."}/>
                    </div>

                    <div className='flex flex-col items-start gap-10 w-[90%] lg:w-[40%]'>
                        <div className='text-[16px] leading-6 font-medium font-inter'>
                            The mordern StudyNotion it the dictates its own terms. Today, to be a 
                            competitive specialist requires more then professional skills.
                        </div>
                        <CTAButton active={true} linkto={"/signup"}>
                            <div>
                                Learn more
                            </div>
                        </CTAButton>
                    </div>
                </div>
                {/* Timeline Section - Section 2 */}
                <TimeLineSection />

                {/* Learning Language Section - Section 3 */}
                <LearningLanguageSection />
            </div>

        </div>

        {/* Section 3 */}
        <div className='relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center 
        justify-between gap-8 bg-richblack-900 text-white '>
            {/* Become a instructor section */}
            <InstructorSection /> 

            {/* Review from Other Learner */}
            <h2 className='text-center text-4xl font-semibold mt-8'>
                review from Other Learners
            </h2>

            {/* Review Slider Here*/} 
            <ReviewSlider />
        </div>

        {/* Footer */}
        <Footer/>
    </div>
  )
}

export default Home