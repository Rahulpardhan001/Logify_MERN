import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import Form from "../components/Form";
import { IoCheckmarkSharp } from "react-icons/io5";

import Page1 from "../Form/FormOverview/Page1/Page1";
import Page2 from "../Form/FormOverview/Page2/Page2";
import Page3 from "../Form/FormOverview/Page3/Page3";
// import FormView1 from "../Form/FormOverview/FormView1";



function Logify() {
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const totalPage = 3; // Total number of pages

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPage) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <>
      <div className=" bg-gridientcolor sticky top-0 z-10">
        <div>
          <div className="head flex justify-center items-center h-28 col-span-1">
            <div className="Logify w-[50%] flex items-center gap-3">
              <span className="text-4xl text-white">
                <IoIosArrowBack />
              </span>
              <span className="w-40 text-4xl font-semibold text-white flex">
              Logify
              <IoCheckmarkSharp className="font-extrabold" />
              </span>
            
            </div>
          </div>
        </div>
      </div>

      
       {/************************ page slide*************************** */}
      <div className="flex justify-center items-center ">
        <div className="text-gray-500 text-xs mb-4 px-4 shadow-custom py-2 bg-[#f1f2f3] flex flex-col gap-1 border w-[750px] md:w-[760px] rounded-b-sm fixed top-[112px] z-10">
          <PageSlide
            currentPage={currentPage}
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
            totalPage={totalPage}
          />
          <span className="font-semibold text-base">Job Report</span>
        </div>
      </div>

          {/* ***************Accordioncard component form */}
      <div className="flex justify-center">
        <div className="w-[50%] mt-[80px] ">
        {currentPage === 1 && <Page1/>}
        {currentPage === 2 && <Page2/>}
        {currentPage === 3 && <Page3/>}
          {/* {currentPage === 2 && <Form currentPage={currentPage} />}
          {currentPage === 3 && <Form currentPage={currentPage} />} */}

          
          
        </div>
      </div>  
    </>
  );
}

export default Logify;












// //********************* page slider *************************//
export function PageSlide({ currentPage, handlePrevPage, handleNextPage, totalPage }) {
  return (
    <>
      <div className="flex items-center justify-between">
        Page {currentPage} of {totalPage}
        <div className="flex ">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`p-2 ${currentPage === 1 ? "opacity-0 cursor-not-allowed" : ""}`}
          >
            <IoIosArrowBack className="text-xl" />
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPage}
            className={`p-2 ${currentPage === totalPage ? "opacity-0 cursor-not-allowed" : ""}`}
          >
            <IoIosArrowForward className="text-xl" />
          </button>
        </div>
      </div>
    </>
  );
}










// import React, { useState } from "react";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// import AccordionForm from "./AccordionForm";

// function Logify() {
//   const stepData = [
//     { name: "Job Title"},
//     { description: "A description of the job role and responsibilities" }
//   ];

//   return (
//     <>
//       <div className="container bg-gradient-to-r from-[#4faca7] via-[#4faca7] to-[#1c77ca] sticky top-0  ">
//         <div>
//           <div className="head flex justify-center  items-center h-28 col-span-1 ">
//             <div className="Logify  w-[50%]  flex items-center gap-3">
//               <span className="text-4xl text-white">
//                 <IoIosArrowBack />
//               </span>
//               <img
//                 className="w-40"
//                 src="https://logbookly.com/public/logos/logbookly_logo_white.png"
//                 alt=""
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/************************ page slide*************************** */}
//       <div className="flex justify-center items-center border  ">
//         <div className="text-gray-500 text-xs mb-4 px-4 shadow-custom py-3 bg-[#f1f2f3] flex flex-col gap-1 border w-[760px] rounded-b-sm fixed top-[112px] ">
//          <PageSlide/>
//           <span className="font-semibold text-base ">Job Report</span>
//         </div>
//       </div>


    
//       {/* ***************Accordioncard component */}
//       <div className="flex justify-center ">
//         <div className=" w-[50%] mt-[80px]">
          
         
//           <AccordionForm/>
//           <AccordionForm1/>
//           <AccordionForm2/>
         
         
//         </div>
//       </div>

//       {/* *******************footer save button ******************** */}

//       <div className="flex justify-center align-middle fixed bottom-0 left-[380px] z-1 ">
//         <button className="bg-teal-500 p-2 px-3 rounded text-white font-normal">
//           Save Job
//         </button>
//       </div>
//     </>
//   );
// }

// export default Logify;


//********************* page slider *************************//
// export function PageSlide() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const totalPage = 3;

//   const handlePrevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage((prev) => prev - 1);
//     }
//   };

//   const handleNextPage = () => {
//     if (currentPage < totalPage) {
//       setCurrentPage((prev) => prev + 1);
//     }
//   };

//   return (
//     <>
//       <div className="flex items-center justify-between">
//         Page {currentPage} of {totalPage}
//         <div className="flex">
//           <button
//             onClick={handlePrevPage}
//             disabled={currentPage === 1}
//             className={`p-2 ${currentPage === 1 ? "hidden cursor-not-allowed" : ""}`}
//           >
//             <IoIosArrowBack className="text-xl" />
//           </button>
//           <button
//             onClick={handleNextPage}
//             disabled={currentPage === totalPage}
//             className={`p-2 ${currentPage === totalPage ? "hidden cursor-not-allowed" : ""}`}
//           >
//             <IoIosArrowForward className="text-xl " />
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }
