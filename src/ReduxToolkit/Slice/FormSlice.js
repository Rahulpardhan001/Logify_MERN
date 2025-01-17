//  import {createslice} from '@reduxjs/toolkit'

import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
     // **********job Report Accordion******//
    sitePhoto:null,
    Reference_no: "",
    customer: "",
    delivery_Address: "",
    assesmentDate: "",
    reviewDate: "",
    engineer:"",
    
    // **********contact Accordion******//
    contact: "",
    contact_email: "",
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
