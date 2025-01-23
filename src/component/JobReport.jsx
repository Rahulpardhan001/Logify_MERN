import React from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CustomInput } from "./CustomInput/CustomInput";
import { InputImage } from "./CustomInput/InputImage";
import { TabButton } from "./CustomInput/TabButton";
import { SelectdInput } from "./CustomInput/SelectedInput";



export function JobReport({ handleInputChange, formData, handleDateChange, imagePreview,handleImageChange }) {
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
        inputValue={formData.Reference_no}
        inputChange={handleInputChange}
        inputPlaceholder="uRisk"
        icon={<span className="text-teal-500">*</span>}
      />
      <CustomInput
        lableText="Customer"
        inputName="customer"
        inputType="text"
        inputValue={formData.customer}
        inputChange={handleInputChange}
        inputPlaceholder="uRisk"
        icon={<span className="text-teal-500">*</span>}
      />
      <CustomInput
        lableText="Delivery Address"
        inputName="delivery_Address"
        inputType="textarea"
        inputValue={formData.delivery_Address}
        inputChange={handleInputChange}
        inputPlaceholder="The Old Stables, Hyde Hall Farm,Buntingford, Hertfordshire, SG90RU"
        icon={<span className="text-teal-500">*</span>}
      />
      {/* *************Assignmet  date */}
      <div className="bg-[#fff] z-10 p-3 border border-[1px solid rgb(222, 228, 237)] mt-3 rounded-lg  ">
        <div className="flex gap-2">
          <span className="text-teal-500">*</span>
          <label
            className="flex text-normal-text items-center gap-1"
            htmlFor=""
          >
            Assessment date
          </label>
        </div>
        <DatePicker
          className="mt-1 px-3 py-2 focus-visible:outline-none text-[#acb0c3] bg-[#f1f2f3] rounded-md    w-[370px] sm:text-sm"
          dateFormat="dd/MM/yyyy"
          placeholderText="02/06/2024"
          peekNextMonth
          showMonthDropdown
          selected={formData.assesmentDate || ""}
          onChange={(date) => handleDateChange(date, "assesmentDate")}
          showYearDropdown
          dropdownMode="select"
          minDate={new Date()}
        />
      </div>
      {/* *************review date */}
      <div className="bg-[#fff] z-10 p-3 border border-[1px solid rgb(222, 228, 237)] mt-3 rounded-lg  ">
        <div className="flex gap-2">
          <span className="text-teal-500">*</span>
          <label
            className="flex text-normal-text items-center gap-1"
            htmlFor=""
          >
            Review date
          </label>
        </div>
        <DatePicker
          className="mt-1 px-3 py-2 focus-visible:outline-none text-[#acb0c3] bg-[#f1f2f3] rounded-md   w-[370px] sm:text-sm"
          dateFormat="dd/MM/yyyy"
          placeholderText="02/06/2024"
          peekNextMonth
          showMonthDropdown
          showYearDropdown
          selected={formData.reviewDate || ""}
          onChange={(date) => handleDateChange(date, "reviewDate")}
          dropdownMode="select"
          minDate={new Date()}
        />
      </div>

    
   
      {/* Engineer comp */}
      <CustomInput
        lableText="Engineer"
        inputName="engineer"
        inputType="text"
        inputValue={formData.engineer}
        inputChange={handleInputChange}
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
      />
    </div>
  );
}
