import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Accordion from "../component/Accordion/Accordion";
import { TabButton } from "../component/CustomInput/TabButton";
import {Summary} from "../component/CustomInput/Summary"
// import { updatedFormData } from "../../../ReduxToolkit/Slice/FormSlice";
// import CustomInput, { Summary, TabButton } from "../../component/CustomInput";
// import Accordion from "../../component/Accordion";

function Page2() {
  const form = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(updatedFormData({ name, value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Data", form);
    // Add logic to handle form submission
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <Accordion
          title="Site Specific Risk Assessment "
          content={
            <NestedComponent formData={form} handleInputChange={handleInputChange} />
          }
        />
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

export default Page2;

// ****************** job Content component ************//
export function NestedComponent({ formData, handleInputChange }) {
  return (
    <div>
      <Summary
      content="All uRisk employees must ensure they understand and adhere to all uRisk and its customers health and safety policies,
       statements, procedures and Risk Assessment Method Statements (RAMS) before starting works on site. You must complete a 'Site Specific Risk Assessment' before commencing any works. You are not permitted to
        start work without firstly completing this assessment. Should you however proceed without completing the assessment, you do so at your
         own risk with full responsibility for your actions."
      />
      <Access />
    </div>
  );
}

export function Access() {
  return (
    <div>
      <Accordion title="Acess/Egress"
      content={
        <div>
          <TabButton
        tabs={["Yes", "No"]}
        labelText="Can you safely access and egress (exit) the working area with no obstructions?"
      />
      <TabButton
        tabs={["Yes", "No"]}
        labelText="Does the workspace avoid working near machinery? If no, are there protective measures in place?"
      />
      
        </div>
      }
     
       />

    </div>
  );
}
