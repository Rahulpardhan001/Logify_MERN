import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import handleRequest from "../axios/axios";

export const addFormPage1 = createAsyncThunk("/page1", async (formData) => {
  // debugger;

  try {
    const res = await handleRequest("POST","/page1",formData,true)
    console.log(res.data,"api hit response");
  } catch (error) {
    console.log(error);
  }
});
