import React from 'react'
import CTAButton from "./Button"
// import HighLightText from './HighLightText'
import {FaArrowRight} from "react-icons/fa"
import { TypeAnimation } from 'react-type-animation'


const CodeBlocks = ({
    position, 
    heading, 
    subheading, 
    ctabtn1, 
    ctabtn2, 
    codeblock, 
    active, 
    codeColor,
}) => {
  return (
    <div className={`flex flex-col ${position ? `lg:flex-row` : `lg:flex-row-reverse`} my-20 justify-between lg:gap-10 gap-10`}>
    
    {/*Section 1*/}
    <div className='w-[100%] lg:w-[40%] flex flex-col gap-8'>
        {heading}

        {/* Sub Heading */}
        <div className='text-richblack-300 text-[14px] font-semibold w-[85%] -mt-3'>
            {subheading}
        </div>

        {/* Button Group */}
        <div className='flex gap-7 mt-7'>
            <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
                <div className='flex items-center gap-2 '>
                    {ctabtn1.btnText}
                    <FaArrowRight/>
                </div>
            </CTAButton>

            <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>  
                    {ctabtn2.btnText}
            </CTAButton>
        </div>


    </div>

     {/*Section 2*/}
     <div className={`h-fit relative code-border flex flex-row py-3 text-[10px] sm:text-sm leading-[18px] sm:leading-6 w-[100%] lg:w-[470px]`}> 
     
        {/*HW -> BG gradient*/}
        {/* {backgroudGradient} */}
        

        <div className='text-center flex flex-col w-[10%] select-none text-richblack-400 font-inter font-bold'>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
            <p>11</p>
        </div>

        <div className={`w-[90%] flex flex-row gap-2 font-bold font-mono ${codeColor} opacity-100 pr-1`}> {/* ${codeColor} */}
           <TypeAnimation
            sequence={[codeblock, 1000, ""]}
            repeat={Infinity}
            cursor={true}
            style = {
                {
                    whiteSpace: "pre-line",
                    display:"block",
                }
            }
            omitDeletionAnimation={true}
           />
        </div>

        <div className={`${active ?  `absolute h-[257.054px] w-[372.949px] z-11 blur-xl bg-gradient-to-tr from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] translate-x-[-20px] translate-y-[-40px] opacity-[0.20000000298023224;] rounded-full` 
        : `absolute h-[257.054px] w-[372.949px] z-11 blur-xl bg-gradient-to-tr from-[#8A2BE2] via-[#FFA500] to-[#F8F8FF] translate-x-[-20px] translate-y-[-40px] opacity-[0.20000000298023224] rounded-full`}`}></div>
     </div>

    </div>
  )
}

export default CodeBlocks
