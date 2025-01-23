import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const Accordion = ({ title, content }) => {
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
            className="bg-teal-500 text-white p-4  flex gap-4 items-center rounded-lg "
            onClick={toggleAccordion}
          >
            {/* Icon Click Only */}
            <div className="cursor-pointer">
              {openIndex  ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </div>
            {/* Accordion Title */}
            <span className="font-medium">{title}</span>
          </div>
         
          <div
            className={`transition-all duration-[500ms] ease-linear ${
            openIndex ? "max-h-[1100px]" : "max-h-0"
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

export default Accordion;
