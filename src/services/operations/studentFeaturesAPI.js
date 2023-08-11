import React from 'react'
import { studentEndpoints } from "../apis"
import { toast } from 'react-hot-toast';
import { apiConnector } from "../apiconnector";
import { setPaymentLoading } from "../../slices/courseSlice"
import rzpLogo from "../../assets/Logo/rzp_logo.png"
import { resetCart } from "../../slices/cartSlice";

const {
  COURSE_PAYMENT_API, 
  COURSE_VERIFY_API, 
  SEND_PAYMENT_SUCCESS_EMAIL_API
} = studentEndpoints;

function loadScript(src){
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src

    script.onload = () => {
      resolve(true);
    }
    script.onerror = () => {
      resolve(false);
    }
    document.body.appendChild(script);
  })
}

export async function BuyCourse(
  token, 
  courses, 
  userDetails, 
  navigate, 
  dispatch
) {
  const toastId = toast.loading("Loading...");
  try{
    // load the script
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    if(!res){
      toast.error("Razorpay SDK failed to load. Check your Internet Connection.");
      return;
    }

    // initiate the order
    const orderResponse = await apiConnector(
        "POST", 
        COURSE_PAYMENT_API, 
        {
          courses,
        },
        {
          Authorization: `Bearer ${token}`,
        }
      )
      console.log("ORDER RESPONSE------->",orderResponse)

    if(!orderResponse.data.success){
      console.log("ORDER ERROR------>", orderResponse.data.success)
      throw new Error(orderResponse.data.message);
    }

    // options
    console.log("Start Buy Course");
    const options = {
      key: process.env.RAZORPAY_KEY,
      currency: orderResponse.data.message.currency,
      amount: `${orderResponse.data.message.amount}`,
      order_id: orderResponse.data.message.id,
      name: "StudyNotion",
      description: "Thank you for Purchasing the Course",
      image: rzpLogo,
      profile: {
        name: `${userDetails.firstName} ${userDetails.lastName}`,
        email: userDetails.email,
      },
      handler: function (response){
        // send successful mail
        // SEND_PAYMENT_SUCCESS_EMAIL_API(response, orderResponse.data.data.amount)
        // {console.log("RESPONSE DATA LOG ----------->", response)}
        sendPaymentSuccessEmail(response, orderResponse.data.message.amount, token);
        // Verify Payment
        verifyPayment({...response, courses}, token, navigate, dispatch);
      }
    }
    console.log("Middle Buy Course");
    const paymentObject = new window.Razorpay(options);
    paymentObject.open()
    paymentObject.on("payment.failed", function (response) {
      toast.error("Oops! Payment Failed.")
      console.log(response.error)
    })
    console.log("End Buy Course");
  } catch(error){
    console.log("PAYMENT API ERROR.......", error);
    toast.error("Could not make Payment");
  }
  toast.dismiss(toastId)
}

async function sendPaymentSuccessEmail(response, amount, token){
  try{
    {console.log("Payment SUCCESS Response Kuki", response,response.razorpay_order_id, amount, token)}
    await apiConnector(
      "POST",
      SEND_PAYMENT_SUCCESS_EMAIL_API,
      {
        orderId: response.razorpay_order_id,
        paymentId: response.razorpay_payment_id,
        amount,
      },
      {
        Authorization: `Bearer ${token}`,
      }
    )
  } catch(error){
    console.log("PAYMENT SUCCESS EMAIL ERROR....", error);
  }
}

// verify payment
async function verifyPayment(bodyData, token, navigate, dispatch){
  const toastId = toast.loading("Verifying Payment....");
  dispatch(setPaymentLoading(true));
  try{
    const response = await apiConnector("POST", COURSE_VERIFY_API, bodyData, {
      Authorization: `Bearer ${token}`,
    })

    if(!response.data.success){
      throw new Error(response.data.message);
    }
    toast.success("Payment Successful, you are added to the course");
    navigate("/dashboard/enrolled-courses");
    dispatch(resetCart());

  } catch(error){
    console.log("PAYMENT VERIFY ERROR....", error);
    toast.error("Could not Verify Payment");
  }
  toast.dismiss(toastId);
  dispatch(setPaymentLoading(false));
}