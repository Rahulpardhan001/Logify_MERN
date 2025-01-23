//  import {createslice} from '@reduxjs/toolkit'

import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    jobReport: {
      sitePhoto: "",
      Reference_no: "",
      customer: "",
      delivery_Address: "",
      assesmentDate: "",
      reviewDate: "",
      engineer: "",
    },
    contact: {
      contact: "",
      contact_email: "",
      contact_phone: "",
    },
    visit: {
      visitUndertaken: "",
      engineerNotes: "",
      notes: "",
    },
  },
  reducers: {
    updatedFormData: (state, action) => {
      console.log(action.payload, "slice data");
      const { name, value } = action.payload;
      state[name] = value;
    },
    updateField:(state,action)=>{
      const{section, name, value} = action.payload;
      state[section][name] = value;
    }
  },
});

export const { updatedFormData,updateField } = formSlice.actions;
export default formSlice.reducer;
