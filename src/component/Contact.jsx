import React from "react";
import { CustomInput } from "./CustomInput/CustomInput";
// import CustomInput from "../component/CustomInput/CustomInput"


export function Contact({ formData, handleInputChange }) {
    return (
      <div>
        <CustomInput
          lableText="Contact"
          inputName="contact"
          inputType="text"
          inputValue={formData.contact}
          inputChange={handleInputChange}
          inputPlaceholder="Luke Cheetam"
          icon={<span className="text-teal-500">*</span>}
        />
        <CustomInput
          lableText="Contact phone"
          inputName="contact_phone"
          inputType="text"
          inputValue={formData.contact_phone}
          inputChange={handleInputChange}
          inputPlaceholder="03330905554"
          icon={<span className="text-teal-500">*</span>}
        />
        <CustomInput
          lableText="Contact email"
          inputName="contact_email"
          inputType="text"
          inputValue={formData.contact_email}
          inputChange={handleInputChange}
          inputPlaceholder="03330905554"
          icon={<span className="text-teal-500">*</span>}
        />
      </div>
    );
  }

