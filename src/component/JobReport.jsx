import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { CustomInput } from "./CustomInput/CustomInput";
import { InputImage } from "./CustomInput/InputImage";
import { TabButton } from "./CustomInput/TabButton";
import { SelectdInput } from "./CustomInput/SelectedInput";
import { useDispatch, useSelector } from "react-redux";
import { updatedFormData } from "../ReduxToolkit/Slice/FormSlice";
import { DatePickers } from "./CustomInput/DatePickers";



export function JobReport({  imagePreview,handleImageChange }) {
  const dispatch = useDispatch();
  const formData = useSelector  ((state) => state.form);

  const handleJobChange =(e,section)=>{
    const {name,value} =  e.target
    let data = {
      section,name,value,
    }
     dispatch(updatedFormData(data))
  }

   // **********************Handle date change*****************//
   const handleDateChange = async (value, name,section) => {
    console.log(section,"section",value,"value", name,"ara hai ya nhi")
    const serializedDate = value ? value.toISOString() : null; 
     dispatch(updatedFormData({section, name, value:serializedDate }));
  };
  return (
    <div>
      {/* input type file */}
    <InputImage
    lableText="Site Photo"
   inputName="sitePhoto"
   inputType="file"
   inputValue={formData.sitePhoto}
   inputChange={handleImageChange}
   customStyle="additional-custom-class"
   icon={<span className="text-teal-500">*</span>}
   imagePreview={imagePreview}
    />
    
      <CustomInput
        lableText="Reference no"
        inputName="Reference_no"
        inputType="text"
        inputValue={formData.jobReport.Reference_no}
        inputChange={(e)=>handleJobChange(e,"jobReport")}
        inputPlaceholder="uRisk"
        icon={<span className="text-teal-500">*</span>}
      />
      <CustomInput
        lableText="Customer"
        inputName="customer"
        inputType="text"
        inputValue={formData.jobReport.customer}
        inputChange={(e)=>handleJobChange(e,"jobReport")}
        inputPlaceholder="uRisk"
        icon={<span className="text-teal-500">*</span>}
      />
      <CustomInput
        lableText="Delivery Address"
        inputName="delivery_Address"
        inputType="textarea"
        inputValue={formData.jobReport.delivery_Address}
        inputChange={(e)=>handleJobChange(e,"jobReport")}
        inputPlaceholder="The Old Stables, Hyde Hall Farm,Buntingford, Hertfordshire, SG90RU"
        icon={<span className="text-teal-500">*</span>}
      />
      {/* *************Assignmet  date */}
        <DatePickers
          inputlabel = "Assessment date"
          placeholderText="02/06/2024"
          selected={formData.jobReport.assesmentDate || ""}
          onChange={(date) => handleDateChange(date,"assesmentDate", "jobReport")}
          dropdownMode="select"
          />
          {/* *************Review  date */}
          <DatePickers
          inputlabel = "Review date"
          placeholderText="02/06/2024"
          selected={formData.jobReport.reviewDate || ""}
          onChange={(date) => handleDateChange(date,"reviewDate", "jobReport")}
          dropdownMode="select"
        />
      
   
      {/* Engineer comp */}
      <CustomInput
        lableText="Engineer"
        inputName="engineer"
        inputType="text"
        inputValue={formData.jobReport.engineer}
        inputChange={(e)=>handleJobChange(e,"jobReport")}
        inputPlaceholder="The Old Stables, Hyde Hall Farm,Buntingford, Hertfordshire, SG90RU"
        icon={<span className="text-teal-500">*</span>}
      />
      {/* <TabButton/> */}
      <TabButton
        tabs={["Management", "Quality Control"]}
        labelText="Quality checked by"
      />
         <SelectdInput
        labelText="Amended Scope of works"
        value={[
          { value: "N/A", label: "N/A" },
          { value: "LRA", label: "LRA" },
          { value: "LRA Multi-Site", label: "LRA Multi-Site" },
          { value: "LRA 20 items", label: "LRA 20 items" },
          { value: "LRA 30 items", label: "LRA 30 items" },
        ]}
        section="jobReport" // Redux section
       name="amendedScopeOfWorks" // Redux field
      />
    </div>
  );
}
