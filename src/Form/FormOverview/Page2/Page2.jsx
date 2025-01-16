

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatedFormData } from "../../../ReduxToolkit/Slice/FormSlice";
import CustomInput from "../../component/CustomInput";
import Accordion from "../../component/Accordion";


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
          title="Job Report"
          content={<JobContent formData={form} handleInputChange={handleInputChange} />}
        />
       
        <button type="submit">Save Job</button>
      </form>
    </div>
  );
}

export default Page2;


// ****************** job Content component ************//
export function JobContent({ formData, handleInputChange }) {
    return (
      <div>
        <CustomInput
          key="Reference no/client"
          label="Reference no/client"
          name="Reference_no"
          value={formData.Reference_no} // Bind to Redux state
          onChange={handleInputChange}
          placeholder="j-00001"
          required
        />
        <CustomInput
          key="customer"
          label="Customer"
          name="customer"
          type="text"
          value={formData.customer}
          onChange={handleInputChange}
          placeholder="uRisk"
          required
        />
        <CustomInput
          key="delivery Address"
          label="Delivery Address"
          name="delivery_Address"
          type="text"
          value={formData.delivery_Address}
          onChange={handleInputChange}
          placeholder="The Old Stables, Hyde Hall Farm,Buntingford, Hertfordshire, SG90RU"
          required
        />
      </div>
    );
  }
  


  
  