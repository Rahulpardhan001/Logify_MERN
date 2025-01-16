//  import {createslice} from '@reduxjs/toolkit'

import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    Reference_no: "",
    customer: "",
    delivery_Address: "",
    contact: "",
    contact_email: "",
    AssessmentData: "",
    assesmentDate: "",
    reviewDate: "",
    engineer: "",
    // **********Notes Accordion******//
    notes: "",
  },
  reducers: {
    updatedFormData: (state, action) => {
      console.log(action.payload, "slice data");
      const { name, value } = action.payload;
      state[name] = value;
    },
  },
});

export const { updatedFormData } = formSlice.actions;
export default formSlice.reducer;
