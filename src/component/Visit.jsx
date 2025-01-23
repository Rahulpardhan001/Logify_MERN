import React from "react";

// import CustomInput from "../component/CustomInput/CustomInput";
import { TabButton } from "./CustomInput/TabButton";
import InnerAccordion from "./InnerAccordion/InnerAccordion";
import { CustomInput } from "./CustomInput/CustomInput";
import { Contact } from "./Contact";

export const Visit = ({ handleInputChange, formData }) => {
  return (
    <div>
      <TabButton tabs={["Yes", "Aborted"]} labelText="Visit Undertaken" />
      <CustomInput 
        lableText="Notes"
        inputName="notes"
        inputType="textarea"
        inputValue={formData.notes}
        inputChange={handleInputChange}
      />
      <InnerAccordion
        title="Additional Material Purchase Request"
        content={<Contact handleInputChange={handleInputChange} formData={formData} />}
      />
    </div>
  );
};


