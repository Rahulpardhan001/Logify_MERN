// export function FormInput({
//   label,
//   type,
//   name,
//   value,
//   onChange,
//   placeholder,
//   required = false,
// }) {
//   return (
//     <>
//       <div className="bg-[#fff] z-10 p-3  relative">
//         {label && (
//           <label
//             htmlFor={name}
//             className="block text-sm font-medium text-gray-700"
//           >
//             {required && (
//               <span className="text-teal-500 absolute left-0 pe-1 ">*</span>
//             )}
//             {label}
//           </label>
//         )}
//         <input
//           type={type}
//           name={name}
//           id={name}
//           value={value}
//           onChange={onChange}
//           placeholder={placeholder}
//           required={required}
//           className="mt-1 px-3 py-2 border border-[1px solid rgb(222, 228, 237)] focus-visible:outline-none text-[#acb0c3] bg-[#f1f2f3] rounded-md   block w-[50%]  sm:text-sm"
//         />
//       </div>
//     </>
//   );
// }

// import React, { useState } from "react";
// import Accordion from "../Form/component/Accordion";
// import DescriptionPage from "./DiscriptionPage";
// // import { FormInput } from "./FormInput";

// const Form = ({ currentPage }) => {
 
//   const [formData, setFormData] = useState({
//     Reference_no: "",
//     customer: "",
//     delivery_Address: "",
//     contact: "",
//     contact_phone: "",
//     contact_email: "",
//     phone: "",
//     email: "",
//     description: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData, "Submit");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//         {currentPage === 1 && (
//         <>
//           {/* **************Job Report******************** */}
//           <Accordion
//             title="Job Report"
//             content={[
//               <FormInput
//                 key="Reference no/client"
//                 label="Reference no/client"
//                 name="Reference_no"
//                 value={formData.Reference_no} // Bind to state
//                 onChange={handleChange}
//                 placeholder="j-00001"
//                 required
//               />,
//               <FormInput
//                 key="customer"
//                 label="Customer"
//                 name="customer"
//                 type="text"
//                 value={formData.customer}
//                 onChange={handleChange}
//                 placeholder="uRisk"
//                 required
//               />,

//               <FormInput
//                 key="delivery Address"
//                 label="Delivery Address"
//                 name="delivery_Address"
//                 type="text"
//                 value={formData.delivery_Address}
//                 onChange={handleChange}
//                 placeholder="The Old Stables, Hyde Hall Farm,Buntingford, Hertfordshire, SG90RU"
//                 required
//               />,
//             ]}
//           />
//           {/* *******************Contact Field ***************/}
//           <Accordion
//             title="Contact"
//             content={[
//               <FormInput
//                 key="contact"
//                 label="Contact"
//                 name="contact"
//                 value={formData.contact}
//                 onChange={handleChange}
//                 placeholder="Luke Cheetam"
//                 required
//               />,
//               <FormInput
//                 key="Contact phone"
//                 label="Contact phone"
//                 name="contact_phone"
//                 type="text"
//                 value={formData.contact_phone}
//                 onChange={handleChange}
//                 placeholder="03330905554"
//                 required
//               />,
//               <FormInput
//                 key="Contact email"
//                 label="Contact email"
//                 name="contact_email"
//                 type="text"
//                 value={formData.contact_email}
//                 onChange={handleChange}
//                 placeholder="03330905554"
//                 required
//               />,
//             ]}
//           />
//         </>
//       )}

//       {currentPage === 2 && (
//         <>
//           <Accordion
//             title="Contact"
//             content={
//               <FormInput
//                 label="Contact"
//                 name="contact"
//                 value={formData.contact}
//                 onChange={handleChange}
//                 placeholder="Enter your contact"
//                 required
//               />
//             }
//           />
//         </>
//       )}

//       {currentPage === 3 && (
//         <>
//           <Accordion
//             title="Description"
//             content={
//               <DescriptionPage
//                 formData={formData}
//                 handleChange={handleChange}
//               />
//             }
//           />
//         </>
//       )}

//       {/* Only show the "Submit" button on the last page */}
//       {currentPage === 3 && (
//         <div className="flex justify-center align-middle fixed bottom-0 left-[480px] z-1 mb-2">
//           <button
//             type="button"
//             className="bg-slate-700 p-2 px-3 rounded text-white font-normal"
//           >
//             Complete Job
//           </button>
//         </div>
//       )}

//       <div className="flex justify-center align-middle fixed bottom-0 left-[380px] z-1 mb-2 ">
//         <button
//           type="button"
//           className="bg-teal-500 p-2 px-3 rounded text-white font-normal"
//         >
//           Save Job
//         </button>
//       </div>
//     </form>
//   );
// };

// export default Form;
