// import React from "react";

// const CustomInput = ({
//   label,
//   type,
//   name,
//   value,
//   onChange,
//   placeholder,
//   textRow,
//   textCol,
//   required = false,
// }) => {
//   return (
//     <>
//       <div className="bg-[#fff] z-10 p-3 border border-[1px solid rgb(222, 228, 237)] mt-3 rounded-lg  relative">
//         <div className="ps-4 pb-1">
//           {label && (
//             <label
//               htmlFor={name}
//               className="block text-sm font-medium text-gray-700 "
//             >
//               {required && (
//                 <span className="text-teal-500 absolute left-0 ps-3 pe-2 ">
//                   *
//                 </span>
//               )}
//               {label}
//             </label>
//           )}
//         </div>
//         {/ text Input element /}
//         {type === "text" && (
//           <input
//             type={type}
//             name={name}
//             id={name}
//             value={value}
//             onChange={onChange}
//             placeholder={placeholder}
//             required={required}
//             className="mt-1 px-3 py-2 focus-visible:outline-none text-[#acb0c3] bg-[#f1f2f3] rounded-md   block w-[50%]  sm:text-sm"
//           />
//         )}

//         {/ Conditional rendering of the text area based on inputType /}
//         {type === "textarea" && (
//           <textarea
//             placeholder={placeholder}
//             name={name}
//             value={value}
//             onChange={onChange}
//             rows={textRow || 4}
//             cols={textCol || 5}
//             className={`mt-1 px-3 py-2 focus-visible:outline-none text-[#acb0c3] bg-[#f1f2f3] rounded-md   block w-[50%]  sm:text-sm`}
//           />
//         )}
//       </div>
//     </>
//   );
// };

// export default CustomInput;


import React from "react";
import { TbInfoCircle } from "react-icons/tb";


const CustomInput = (props) => {
  const {
    inputType = "text",
    inputPlaceholder,
    inputName,
    ids,
    customStyle,
    inputValue="",
    inputChange,
    lableText,
    lableStyle,
    infoMessage,
    infoTrue,
    icon,
    errMessage,
    textRow,
    textCol,
    infoStyle
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
              <span className={`hidden  group-hover:block absolute z-10 left-44 top-[-1.5rem] border bg-gray-500 text-white rounded px-2 py-1 text-xs ${infoStyle}`}>
                {infoMessage}
              </span>
            </span>
          </>
        )}
      </label>

    
   {inputType=="text" &&  <input
        type={inputType}
        placeholder={inputPlaceholder}
        name={inputName}
        id={ids}
        value={inputValue}
        onChange={inputChange}
        className={`mt-1 px-3 py-2 focus-visible:outline-none  bg-[#f1f2f3] rounded-md   block w-[50%]  sm:text-sm ${customStyle}`}
      />}

  
{inputType === "textarea" && (
  <textarea
    placeholder={inputPlaceholder}  
    name={inputName}              
    id={ids}                       
    value={inputValue}             
    onChange={inputChange}    
    rows={textRow || 4}                     
    cols={textCol||5}        
    className={`mt-1 px-3 py-2 focus-visible:outline-none  bg-[#f1f2f3] rounded-md  sm:text-sm w-full ${customStyle}`} 
  />
)}


     {/* jhhdjk */}
      {errMessage && <p className="text-red-500 text-sm">{errMessage}</p>}
    </div>
  );
};

export default CustomInput;
