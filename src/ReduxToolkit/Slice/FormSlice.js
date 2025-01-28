import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    jobReport: {
      sitePhoto: "",
      ReferenceNo: "",
      customer: "",
      deliveryAddress: "",
      assesmentDate: "",
      reviewDate: "",
      engineer: "",
      amendedScopeOfWorks:""
    },
    Contact: {
      contact: "",
      contactPhone: "",
      contactEmail: "",
    },
    visit: {
      visitUndertaken: "",
      // engineerNotes: "engineerNotes",
      notes: "",
    },
  },
  reducers: {
    updatedFormData: (state, action) => {
    // debugger;
      const { section, name, value } = action.payload;
      console.log("Section:", section, "Name:", name, "Value:", value,"action.payload",action.payload);

      // Validate if the section exists in the state
      if (state[section]) {
        // Update the nested field
        state[section][name] = value || ""; // Default to an empty string if no value is provided
      } else {
        console.error(`Section "${section}" does not exist in the state.`);
      }
    },
  },
});

export const { updatedFormData } = formSlice.actions;
export default formSlice.reducer;
