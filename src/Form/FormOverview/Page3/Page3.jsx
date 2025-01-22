import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatedFormData } from "../../../ReduxToolkit/Slice/FormSlice";
import CustomInput, { Summary, TabButton } from "../../component/CustomInput";
import Accordion from "../../component/Accordion";
// import Accordion from "../../component/Accordion";

function Page3() {
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
          title="Section 1: Executive Summery  "
          content={
            <JobContent formData={form} handleInputChange={handleInputChange} />
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

export default Page3;

// ****************** job Content component ************//
export function JobContent({ formData, handleInputChange }) {
  return (
    <div>
      <Access />
    </div>
  );
}

export function Access() {
  return (
    <div>
      <Accordion
        title="The Report"
        content={
          <div>
            <Summary
              content="The aim of the survey is to identify and place on record a report that assesses the risk of legionella bacteria presence within the agreed scope of works in your booking confirmation. The list below identifies the agreed scope of works and the agreed quantities of assets to be assessed. Toilets and urinals are not included within this report due to their low risk nature. However, should they become infrequently used or faulty, action should be taken to repair or remove where necessary.

This report is written in correspondence with The Approved Code of Practice (L8), HSG 274 providing the named site with information found on the day of site attendance and within the scope of work agreed. The ACoP (Approved Code of Practice L8), HSG 274 requires that the risk assessment be reviewed following any major changes, which might make the original assessment invalid. It is good practice to have your assessment reviewed regularly to ensure safe and correct operations. Pathogens other than Legionella are not assessed within this report.

Limitations of Legionella Risk Assessment.

This report has been prepared for the exclusive use of our customer and is subject to and issued in connection with the provisions of the agreement between us and our customer. We accept no liability or responsibility whatsoever for or in respect of any use of or reliance upon this report by any third party.

This legionella risk assessment limitations include safe access, availability of areas, and visibility of the water system, availability responsible persons and their site knowledge, and historical data. Therefore this report including the schematic, logbook, and any other areas covered by this document are based on 'as seen' on the date of attendance."
            />

          </div>
        }
      />
      <Accordion
        title="When and how often do I need a Legionella Risk Assessment? "
        content={
          <div>
            <Summary
              content="
The Approved Code of Practice L8 (HSG 274) in accordance with The Health & Safety at Work Act 1974 states that – “The Duty holder should arrange to review the assessment regularly and specifically when there is reason to suspect it is no longer valid. An indication of when to review the assessment and what to consider should be recorded and this may result from:

    - A change to the water system;
    - A change to the use of the building where the system is installed;
    New information available about risks or control measures;
    The results of checks indicating that control measures are no longer effective;
    - Changes to key personnel;
    - A case of legionnaires disease”

"
            />

          </div>
        }
      />

    </div>
  );
}
