import React from "react";
import { MdOutlineCameraAlt } from "react-icons/md";


export function InputImage({
    inputType,
    inputPlaceholder,
    ids,
    inputName,
    icon,
    inputChange,
    customStyle,
    lableText,
    lableStyle,
    imagePreview
  }) {
    return (
      <>
        <div className="flex flex-col  gap-2  bg-[#fff] z-10 p-3 border border-[1px solid rgb(222, 228, 237)] mt-3 rounded-lg ">
          {/* input type file  */}
          <div className="flex justify-between  w-full">
          <label
            htmlFor={inputName}
            className={`flex items-center relative  ${lableStyle}`}
          >
            <p className="flex text-normal-text items-center gap-1">
              {icon} {lableText}
            </p>
          </label>
  
          <div className=" w-32 relative">
          <input
            type={inputType}
            placeholder={inputPlaceholder}
            name={inputName}
            id={ids}
            accept="image/*" // Accept only image files
            onChange={inputChange}
            className={` px-1 w-full absolute top-0 focus-visible:outline-none  rounded-md opacity-0   sm:text-sm ${customStyle}`}
          />
          <span className=" flex items-center gap-1 bg-teal-500 text-white p-1 px-2 border w-[90%] rounded cursor-pointer "><MdOutlineCameraAlt />
           <span className="text-sm font-semibold ">
           Add Photo
          </span></span>
          </div>
          </div>
            {/* Image Preview */}
            {imagePreview && (
            <div className="mt-3 ">
              <img
                src={imagePreview}
                alt="Preview"
                className="w-16 h-16 object-cover rounded"
              />
            </div>
          )}
         
        </div>
      </>
    );
  }