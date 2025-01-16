import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./Slice/FormSlice";


const store = configureStore({
    reducer:{
        form:formSlice,  
    }
})
// console.log("Initial Redux Store State:", store.getState());

export default store;