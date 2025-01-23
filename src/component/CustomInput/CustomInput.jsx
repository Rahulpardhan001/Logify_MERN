import React, { useEffect, useState } from "react";
import { TbInfoCircle } from "react-icons/tb";


export const CustomInput = (props) => {
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
    section
  } = props;

  const handleChange = (e) => {
    const { value } = e.target;
    onChange(section, inputName, inputValue); // Pass fieldName and value to parent handler
  };
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

