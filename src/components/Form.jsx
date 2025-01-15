
// // *********************Form Input Field **************//
export function FormInput({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  required = false,
}) {
  return (
    <>
      <div className="bg-[#fff] z-10 p-3 relative">
        {label && (
          <label
            htmlFor={name}
            className="block text-sm font-medium text-gray-700"
          >
            {required && <span className="text-teal-500 absolute left-0 pe-1 ">*</span>}
            {label}
          </label>
        )}
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="mt-1 px-3 py-2 border border-[1px solid rgb(222, 228, 237)] focus-visible:outline-none text-[#acb0c3] bg-[#f1f2f3] rounded-md   block w-[50%]  sm:text-sm"
        />
      </div>
    </>
  );
}

import React, { useState } from "react";
import Accordion from "./Accordion";
import DescriptionPage from "./DiscriptionPage";
// import DescriptionPage from "./DiscriptionPage";
// import { FormInput } from "./Form";

const Form = ({ currentPage }) => {
  const [formData, setFormData] = useState({
    Reference_no: "",
    customer: "",
    phone: "",
    email: "",
    contact: "",
    delivery_Address:"",
    contact_phone: "",
    description: "",
  });

  // Handle change for form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData, "Submit");
  };

  return (
    <form onSubmit={handleSubmit}>
      {currentPage === 1 && (
        <>
          {/* **************Job Report******************** */}
          <Accordion
            title="Job Report"
            content={[
              <FormInput
                key="Reference no/client"
                label="Reference no/client"
                name="Reference_no"
                value={formData.Reference_no}
                onChange={handleChange}
                placeholder="j-00001"
                required
              />,
              <FormInput
                key="customer"
                label="Customer"
                name="customer"
                type="text"
                value={formData.customer}
                onChange={handleChange}
                placeholder="uRisk"
                required
              />,

              <FormInput
                key="delivery Address"
                label="Delivery Address"
                name="delivery_Address"
                type="textarea"
                value={formData.delivery_Address}
                onChange={handleChange}
                placeholder="The Old Stables, Hyde Hall Farm,Buntingford, Hertfordshire, SG90RU"
                required
              />,
            ]}
          />
          {/* *******************Contact Field ***************/}
          <Accordion
            title="Job Report"
            content={[
              <FormInput
                key="contact"
                label="Contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Luke Cheetam"
                required
              />,
              <FormInput
                key="Contact phone"
                label="Contact phone"
                name="contact_phone"
                type="text"
                value={formData.contact_phone}
                onChange={handleChange}
                placeholder="03330905554"
                required
              />,
            ]}
          />
        </>
      )}

      {currentPage === 2 && (
        <>
          <Accordion
            title="Contact"
            content={
              <FormInput
                label="Contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Enter your contact"
                required
              />
            }
          />

          {/* If you need to render another unique Accordion, ensure it has a different title or content */}
          <Accordion
            title="Additional Contact Information"
            content={
              <FormInput
                label="Contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Enter your additional contact info"
                required
              />
            }
          />
        </>
      )}

      {currentPage === 3 && (
        <>
          <Accordion
            title="Description"
            content={
              <DescriptionPage
                formData={formData}
                handleChange={handleChange}
              />
            }
          />
        </>
      )}

      {/* Only show the "Submit" button on the last page */}
      {currentPage === 3 && (
        <div className="flex justify-center align-middle fixed bottom-0 left-[480px] z-1 mb-2">
          <button
            type="button"
            className="bg-slate-700 p-2 px-3 rounded text-white font-normal"
          >
            Complete Job
          </button>
        </div>
      )}

      <div className="flex justify-center align-middle fixed bottom-0 left-[380px] z-1 mb-2">
        <button
          type="button"
          className="bg-teal-500 p-2 px-3 rounded text-white font-normal"
        >
          Save Job
        </button>
      </div>
    </form>
  );
};

export default Form;

// import React, { useState } from "react";

// const Form = ({ currentPage }) => {
//   const [formData, setFormData] = useState({
//     username: '',
//     phone: '',
//     email: '',
//     Contact: '',
//     Discription: '',
//   });
//   const totalPage = 3

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData, "submitted");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {/* Render different form contents based on the page */}
//       {currentPage === 1 && (
//         <div>
//           {/* Page 1 Form Inputs */}
//           <input
//             type="text"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             placeholder="Username"
//           />
//           {/* Add other inputs here for page 1 */}
//         </div>
//       )}

//       {currentPage === 2 && (
//         <div>
//           {/* Page 2 Form Inputs */}
//           <input
//             type="text"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Email"
//           />
//           {/* Add other inputs here for page 2 */}
//         </div>
//       )}

//       {currentPage === 3 && (
//         <div>
//           {/* Page 3 Form Inputs */}
//           <input
//             type="text"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             placeholder="Phone"
//           />
//           {/* Add other inputs here for page 3 */}
//         </div>
//       )}

//       {currentPage === totalPage && (
//         <button type="submit">Submit</button>
//       )}
//     </form>
//   );
// };

// export default Form;
