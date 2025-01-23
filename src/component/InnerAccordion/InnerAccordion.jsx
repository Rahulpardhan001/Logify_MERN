import React, { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const InnerAccordion = ({ title, content }) => {
  const [openIndex, setOpenIndex] = useState(false);


  const toggleAccordion = () => {
    setOpenIndex(prev=>!prev);
  };

  return (
    <div className=" py-4  p-1 relative z-0">
      {/* Accordion */}
      <div className="space-y-4 ">
        {/* Accordion Item 1 */}
        <div className=" overflow-hidden">
          <div
            className="bg-teal-500 text-white p-4  flex justify-between items-center rounded-lg "
            onClick={toggleAccordion}
          >
            {/* Accordion Title */}
            <span className="font-medium text-sm ps-4">{title}</span>
            {/* Icon Click Only */}
            <div className="cursor-pointer">
              {openIndex  ?  <RxCross2 className="bg-red-700 rounded-sm"/> :<FiPlusCircle /> }
            </div>
            
          </div>
    
          <div
            className={`transition-all duration-[500ms] ease-linear ${
            openIndex ? "max-h-[1000px]" : "max-h-0"
        } overflow-hidden`}
          >
            <div className="rounded-lg mt-5 relative ">
              <div>{content}</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default InnerAccordion;
