"use client"

import { useEffect, useRef, useState } from "react"
import "./freeestimateform.css"
import sendEmail from "@/app/(mainsite)/controllers/sendEmail"
import MessageStatus from "../MessageStatus/MessageStatus"

export default function FreeEstimateForm() {

    const [status, setStatus] = useState("none")
    const formRef: any = useRef();
    const [currentDate, setCurrentDate] = useState("")


  return (
    <>
    <MessageStatus status={status} setStatus={setStatus}/>
    <form ref={formRef} id="estimateForm" onSubmit={(evt)=>{sendEmail(evt, setStatus, {
        receiverEmail: process.env.NEXT_PUBLIC_DELIVERY_EMAIL!,
        data: Object.fromEntries(new FormData(formRef.current))
    }, formRef.current)}}>

        {/* START FIELDS */}
            
       
        <div className="input-wrapper">
               
               <input required type="text" name="Name" id="nameinput" placeholder={"Name"} />
               </div>
               <div className="input-wrapper">
               
            <input required type="tel" name="Phone_Number" id="phoneeInput" placeholder={"Phone Number"} />
            </div>
            
            <div className="input-wrapper">
                <input required type="email" name="Email" id="emailInput" placeholder={"Email"} />
            </div>
            <div className="input-wrapper">
                <input required type="text" name="Location" id="locInput" placeholder={"Location"} />
            </div>

            <div className="input-wrapper">
                <textarea required maxLength={5000} name="Details" id="messageInput" placeholder={"Details..."}></textarea>
            </div>
            
            <div className="center">
                <a onClick={(evt)=>{evt.preventDefault(); formRef.current.requestSubmit();}} className="main-link" id="estimateFormSubmit" type="submit">Submit</a>
            </div>

            {/* END FIELDS */}
        </form>
    </>
  )
}
