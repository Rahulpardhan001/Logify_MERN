import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const Accordion = ({title, content}) => {
  const [openIndex, setOpenIndex] = useState(null);
  
  // console.log(content, "steps card");
  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className=" py-4  p-1">
      {/* Accordion */}
      <div className="space-y-4 ">
        {/* Accordion Item 1 */}
        <div className=" overflow-hidden shadow-sm ">
          <div
            className="bg-teal-500 text-white p-4 py-7 flex gap-4 items-center rounded-lg "
            onClick={(e) => {
              e.stopPropagation(); // Prevents parent click
              toggleAccordion(0);
            }}
          >
            {/* Icon Click Only */}
            <div className="cursor-pointer">
              {openIndex === 0 ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </div>
            {/* Accordion Title */}
            <span className="font-medium">{title}</span>
          </div>
          {openIndex === 0 && (
            <div className="">
              {/* Check if content is an array */}
              {Array.isArray(content)
                ? content.map((item, index) => (
                    <div className="rounded-lg p-4 bg-[#fff] mt-5 text-gray-700 border relative z-[-1] " key={index}>
                      {item}
                    </div>
                  ))
                :
                <div className="rounded-lg p-4  mt-5 text-gray-700 border relative z-[-1] ">
                 {content}
                 </div>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Accordion;

