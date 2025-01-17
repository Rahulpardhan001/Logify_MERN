import React, { useEffect, useState } from "react";
import { TbInfoCircle } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

const CustomInput = (props) => {
  const {
    inputType = "text",
    inputPlaceholder,
    inputName,
    ids,
    customStyle,
    inputValue = "",
    inputChange,
    lableText,
    lableStyle,
    infoMessage,
    infoTrue,
    icon,
    errMessage,
    textRow,
    textCol,
    infoStyle,
  } = props;

  return (
    <div className="flex flex-col gap-2 bg-[#fff] z-10 p-3 border border-[1px solid rgb(222, 228, 237)] mt-3 rounded-lg ">
      <label
        htmlFor={inputName}
        className={`flex items-center relative  ${lableStyle}`}
      >
        <p className="flex text-normal-text items-center gap-1">
          {icon} {lableText}
        </p>

        {infoTrue && infoMessage && (
          <>
            <span className="group">
              <TbInfoCircle className="ml-2 cursor-pointer text-red-500" />
              <span
                className={`hidden  group-hover:block absolute z-10 left-44 top-[-1.5rem] border bg-gray-500 text-white rounded px-2 py-1 text-xs ${infoStyle}`}
              >
                {infoMessage}
              </span>
            </span>
          </>
        )}
      </label>

      {/* input type file  */}
      {inputType == "file" && (
        <input
          type={inputType}
          placeholder={inputPlaceholder}
          name={inputName}
          id={ids}
          accept="image/*" // Accept only image files
          onChange={inputChange}
          className={`mt-1 px-3 py-2 focus-visible:outline-none  bg-teal-500 rounded-md w-[30%]   sm:text-sm ${customStyle}`}
        />
      )}
      {/* Custom label */}

      {inputType == "text" && (
        <input
          type={inputType}
          placeholder={inputPlaceholder}
          name={inputName}
          id={ids}
          value={inputValue}
          onChange={inputChange}
          className={`mt-1 px-3 py-2 focus-visible:outline-none  bg-[#f1f2f3] rounded-md   block w-[50%]  sm:text-sm ${customStyle}`}
        />
      )}

      {inputType === "textarea" && (
        <textarea
          placeholder={inputPlaceholder}
          name={inputName}
          id={ids}
          value={inputValue}
          onChange={inputChange}
          rows={textRow || 4}
          cols={textCol || 5}
          className={`mt-1 px-3 py-2 focus-visible:outline-none  bg-[#f1f2f3] rounded-md  sm:text-sm w-full ${customStyle}`}
        />
      )}

      {/* jhhdjk */}
      {errMessage && <p className="text-red-500 text-sm">{errMessage}</p>}
    </div>
  );
};

export default CustomInput;

// *********************** tab Button *****************//

export function TabButton({ tabs, labelText }) {
  const [activeTab, setActiveTab] = useState(tabs[0]); // Set the default active tab as the first tab

  // Handle the tab change
  const handleActiveTab = (tab) => {
    setActiveTab(tab); // Update the active tab
  };

  return (
    <div className="bg-[#fff] z-10 p-3 border border-[1px solid rgb(222, 228, 237)] mt-3 rounded-lg">
      <div className="flex gap-2 pb-2">
        <span className="text-teal-500">*</span>
        <label>{labelText}</label>
      </div>

      <div className="flex gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={
              activeTab === tab
                ? "border p-2 text-center rounded bg-[#707070] text-sm  w-[180px] font-medium text-white"
                : "border p-2 rounded text-sm w-[180px]  font-medium"
            }
            onClick={() => handleActiveTab(tab)} // Handle tab click
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}



// *********************** seleted input Button *****************//

export function SelectdInput({ labelText, value }) {
  console.log(value, "value is selectd ");
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
            outline:'none'
          }),
         
        }}
        menuPlacement="top"
        options={value.map((item) => item)}
      />
    </div>
  );
}
