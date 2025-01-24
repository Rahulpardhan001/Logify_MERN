import React from "react";

// import CustomInput from "../component/CustomInput/CustomInput";
import { TabButton } from "./CustomInput/TabButton";
import InnerAccordion from "./InnerAccordion/InnerAccordion";
import { CustomInput } from "./CustomInput/CustomInput";
import { Contact } from "./Contact";
import { updatedFormData } from "../ReduxToolkit/Slice/FormSlice";
import { useDispatch, useSelector } from "react-redux";

export const Visit = () => {
  const formData = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const handleVisitChange =(e,section)=>{
    const {name,value} =  e.target
    let data = {
      section,name,value,
    }
     dispatch(updatedFormData(data))
  }
  return (
    <div>
      <TabButton tabs={["Yes", "Aborted"]} labelText="Visit Undertaken" />
      <CustomInput 
        lableText="Notes"
        inputName="notes"
        inputType="textarea"
        inputValue={formData.visit.notes}
        inputChange={(e)=>handleVisitChange(e,"visit")}
      />
      <InnerAccordion
        title="Additional Material Purchase Request"
        content={<Contact />}
      />
    </div>
  );
};


