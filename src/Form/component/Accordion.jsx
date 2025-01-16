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
          {openIndex  && (
            <div className="">
              <div className="rounded-lg mt-5 relative ">
                <div>{content}</div>
              </div>
            </div>
          )}
          {/* <div
            className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${
              openIndex ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="rounded-lg mt-5 relative ">
              <div>{content}</div>
            </div>
          </div> */}

        </div>
      </div>
    </div>
  );
};

export default Accordion;
