import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updatedFormData } from "../ReduxToolkit/Slice/FormSlice";
import { addFormPage1 } from "../Thunk/FormThunk";
import {JobReport } from "../component/JobReport";
import { Visit } from "../component/Visit";
import { Contact } from "../component/Contact";
import Accordion from "../component/Accordion/Accordion";

function Page1() {
  const formData = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    await dispatch(updatedFormData({ name, value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("jobReport", JSON.stringify(formData?.jobReport));
    data.append("Contact", JSON.stringify(formData?.Contact));
    data.append("visit", JSON.stringify(formData?.visit));
    dispatch(addFormPage1(data));
  };

  return (
    <form onSubmit={submitHandler}>
      <Accordion
        title="Job Report"
        content={<JobReport handleInputChange={handleInputChange} formData={formData} />}
      />
      <Accordion
        title="Contact"
        content={<Contact handleInputChange={handleInputChange} formData={formData} />}
      />
      <Accordion
        title="Visit"
        content={<Visit handleInputChange={handleInputChange} formData={formData} />}
      />
      <div className="flex justify-center align-middle fixed bottom-0 left-[385px] z-1 mb-2 ">
          <button
            type="submit"
            className="bg-teal-500 p-2 px-3 rounded text-white font-normal"
          >
            Save Job
          </button>
        </div>
    </form>
  );
}

export default Page1;
