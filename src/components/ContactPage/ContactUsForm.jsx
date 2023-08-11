import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import apiconnector from '../../services/apiconnector'
import { contactusEndpoint } from '../../services/apis';
import countrycode from '../../data/countrycode.json'

const ContactUsForm = () => {

    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isSubmitSuccessful},
    } = useForm();

    const submitContactForm = async(data) => {
        console.log("Logging Data", data);
        try{
            setLoading(true);
            // const response = await apiconnector("POST", contactusEndpoint.CONTACT_US_API, data);
            const response = {status:"OK"};
            console.log("Logging Response", response);
            setLoading(false);
        }catch(error){
            console.log("Error", error.message);
            setLoading(false);
        }
    }

    useEffect( () => {
        if(isSubmitSuccessful){
            reset({
                email:"",
                firstname:"",
                lastname:"",
                message:"",
                phoneNo:"",
            })
        }
    }, [reset,isSubmitSuccessful]);

  return (
    <form 
    className='flex flex-col gap-7'
    onSubmit={handleSubmit(submitContactForm)}>

        <div className='flex flex-col gap-5 lg:flex-row'>
            {/* firstname */}
            <div className='flex flex-col gap-2 lg:w-[48%]'>
                <label htmlFor='firstname' className='lable-style'>First Name</label>
                <input
                    type='text'
                    name='firstname'
                    id='firstname'
                    placeholder='Enter First Name'
                    className='form-style'
                    {...register("firstname",{required:true})}
                />
                {
                    errors.firstname && (
                        <span className='-mt-1 text-[12px] text-yellow-100'>
                            Please enter your name 
                        </span>
                    )
                }
            </div>

            {/* lastname */}
            <div className='flex flex-col gap-2 lg:w-[48%]'>
                <label htmlFor='lastname' className='lable-style'>Last Name</label>
                <input
                    type='text'
                    name='lastname'
                    id='lastname'
                    className='form-style'
                    placeholder='Enter Last Name'
                    {...register("lastname")}
                />
            </div>
        </div>
        {/* email */}
         <div className='flex flex-col gap-2'>
                <label htmlFor='email' className='lable-style'>Email Address</label>
                <input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Enter email Address'
                    className='form-style'
                    {...register("email", {required:true})}
                />
                {
                    errors.email && (
                        <span className='-mt-1 text-[12px] text-yellow-100'>
                            Please Enter Your Email Address
                        </span>
                    )
                }
        </div>

        {/* phoneNo */}
        <div className='flex flex-col gap-2'>

            <label htmlFor='phonenumber' className='lable-style'>
                Phone Number
            </label>

            <div className='flex gap-5'>
                {/* dropdown */}
                <div className='flex w-[81px] flex-col gap-2'>
                    <select
                    name='dropdown'
                    id='dropdown'
                    className='form-style py-[15px]'
                    {...register("countrycode", {required:true})}
                    >
                        {
                            countrycode.map( (element, index) => {
                                return (
                                    <option key={index} value={element.code} className='bg-richblack-800'>
                                        {element.code} -{element.country}
                                    </option>
                                )
                            })
                        }
                    </select>
                </div>
                {/* input */}
                <div className='flex w-[calc(100%-90px)] flex-col gap-2'>
                    <input
                        type='tel'
                        name='phonenumber'
                        id='phonenumber'
                        placeholder='123-456-7894'
                        className='form-style '
                        {...register("phoneNo",
                        {
                            required:{value:true, message:"Please enter Phone Number."},
                            maxLength:{value:10, message:"Invalid Phone Number"},
                            minLength:{value:10, message:"Invalid Phone Number"},
                        })}
                    />
                </div>
            </div>
            {
                errors.phoneNo && (
                    <span className='-mt-1 text-[12px] text-yellow-100'>
                        {errors.phoneNo.message}
                    </span>
                )
            }
        </div>

        {/* messsge */}
        <div className='flex flex-col gap-2'>
                <label htmlFor='message' className='lable-style'>Message</label>
                <textarea
                    name='message'
                    id='message'
                    cols={30}
                    rows={7}
                    placeholder='Enter Your Message Here'
                    className='form-style resize-none'
                    {...register("message", {required:true})}
                />
                {
                    errors.message && (
                        <span className='-mt-1 text-[12px] text-yellow-100'>
                            Please enter your message
                        </span>
                    )
                }
        </div>

        <button 
        type='submit'
        className={`rounded-md bg-yellow-50 px-6 py-3 text-center text-[13px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)]
        `}
        >
            Send Message
        </button>
    </form>
  )
}

export default ContactUsForm