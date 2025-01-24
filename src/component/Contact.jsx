import React from "react";
import { CustomInput } from "./CustomInput/CustomInput";
import { updatedFormData } from "../ReduxToolkit/Slice/FormSlice";
import { useDispatch, useSelector } from "react-redux";
// import CustomInput from "../component/CustomInput/CustomInput"


export function Contact() {
  const formData = useSelector((state) => state.form);
  
  const dispatch = useDispatch()
  const handleContactChange =(e,section)=>{
    const {name,value} =  e.target
    let data = {
      section,name,value,
    }
     dispatch(updatedFormData(data))
  }
    return (
      <div>
        <CustomInput
          lableText="Contact"
          inputName="contact"
          inputType="text"
          inputValue={formData.Contact.contact}
          inputChange={(e)=>handleContactChange(e,"Contact")}
          inputPlaceholder="Luke Cheetam"
          icon={<span className="text-teal-500">*</span>}
        />
        <CustomInput
          lableText="Contact phone"
          inputName="contact_phone"
          inputType="text"
          inputValue={formData.Contact.contact_phone}
          inputChange={(e)=>handleContactChange(e,"Contact")}
          inputPlaceholder="03330905554"
          icon={<span className="text-teal-500">*</span>}
        />
        <CustomInput
          lableText="Contact email"
          inputName="contact_email"
          inputType="text"
          inputValue={formData.Contact.contact_email}
          inputChange={(e)=>handleContactChange(e,"Contact")}
          inputPlaceholder="03330905554"
          icon={<span className="text-teal-500">*</span>}
        />
      </div>
    );
  }

