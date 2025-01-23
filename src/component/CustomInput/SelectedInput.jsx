import React from "react";
import Select from "react-select";

export function SelectdInput({ labelText, value }) {
    // console.log(value, "value is selectd ");
    return (
      <div className="bg-[#fff] z-10 p-3 border border-[1px solid rgb(222, 228, 237)] mt-3 rounded-lg">
        <div className="flex gap-2 pb-2">
          <span className="text-teal-500">*</span>
          <label>{labelText}</label>
        </div>
  
        <Select
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderColor: state.isFocused
                ? "grey"
                : "border-[1px solid rgb(222, 228, 237)]",
            }),
            option: (baseStyles, state) => ({
              ...baseStyles,
              backgroundColor:
                state.isSelected || state.isFocused ? "#1cb2a9" : "", // Set teal background for selected/focused options
              color: state.isSelected || state.isFocused ? "white" : "", // Change text color for selected/focused options
              ":active": {
                backgroundColor: "1cb2a9",
              },
              outline: "none",
            }),
          }}
          menuPlacement="top"
          options={value.map((item) => item)}
        />
      </div>
    );
  }
  