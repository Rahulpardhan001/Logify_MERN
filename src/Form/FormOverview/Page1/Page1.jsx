import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatedFormData } from "../../../ReduxToolkit/Slice/FormSlice";
import CustomInput, {
  InputImage,
  SelectdInput,
  TabButton,
} from "../../component/CustomInput";
import Accordion from "../../component/Accordion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import InnerAccordion from "../../component/InnerAccordion";

function Page1() {
  const formData = useSelector((state) => state.form);

  const [imagePreview, setImagePreview] = useState(formData.sitePhoto || null);
  const dispatch = useDispatch();
  console.log("Form Data", imagePreview);

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    await dispatch(updatedFormData({ name, value }));
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      // Generate image preview URL
      const objectUrl = URL.createObjectURL(file);
      setImagePreview(objectUrl);

      // Dispatch the file to Redux store (if required, depending on your API)
      await dispatch(updatedFormData({ name: "sitePhoto",  value: objectUrl }));
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData, "forma dk");
  };

  // **********************Handle date change*****************//
  const handleDateChange = async (value, name) => {
    await dispatch(updatedFormData({ name, value }));
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <Accordion
            title="Job Report"
            content={
              <JobContent
                handleInputChange={handleInputChange}
                formData={formData}
                handleDateChange={handleDateChange}
                handleImageChange={handleImageChange} // Pass image handler here
                imagePreview={imagePreview}
              />
            }
          />
          <Accordion
            title="Contact"
            content={
              <Contact
                handleInputChange={handleInputChange}
                formData={formData}
              />
            }
          />
          <Accordion
            title="Visit"
            content={
              <Visit
                handleInputChange={handleInputChange}
                formData={formData}
              />
            }
          />
        </div>

        <div className="flex justify-center align-middle fixed bottom-0 left-[385px] z-1 mb-2 ">
          <button
            type="button"
            className="bg-teal-500 p-2 px-3 rounded text-white font-normal"
          >
            Save Job
          </button>
        </div>
      </form>
    </div>
  );
}

export default Page1;

// ****************** job Content component ************//
function JobContent({ handleInputChange, formData, handleDateChange, imagePreview,handleImageChange }) {
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

// ****************** contact component ************//
function Contact({ formData, handleInputChange }) {
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

// ****************** contact component ************//
function Visit({ formData, handleInputChange }) {
  return (
    <div>
      <TabButton tabs={["Yes", "Aborted"]} labelText="Visit Undertaken" />

      <TabButton tabs={["Yes", "No"]} labelText="Engineer Notes" />

      <CustomInput
        lableText="Notes"
        inputName="notes"
        inputType="textarea"
        inputValue={formData.notes}
        inputChange={handleInputChange}
        inputPlaceholder="Example notes"
        icon={<span className="text-teal-500">*</span>}
      />

     

      <InnerAccordion
        title="Additional Material Purchase Request 1"
        content={
          <Contact handleInputChange={handleInputChange} formData={formData} />
        }
        
      />

      <InnerAccordion
        title="Additional Material Purchase Request 1"
        content={
          <Contact handleInputChange={handleInputChange} formData={formData} />
        }
      />
    </div>
  );
}
