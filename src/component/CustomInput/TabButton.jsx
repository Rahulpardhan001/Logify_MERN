
import React, {useState } from "react";


export function TabButton({ tabs, labelText }) {
    const [activeTab, setActiveTab] = useState(tabs[0]); // Set the default active tab as the first tab
  
    // Handle the tab change
    const handleActiveTab = (tab) => {
      setActiveTab(tab); // Update the active tab
    };
  
    return (
      <div className="bg-[#fff] z-10 p-3 border border-[1px solid rgb(222, 228, 237)] mt-3 rounded-lg">
        <div className="flex gap-2 pb-2">
          <span className="text-teal-500">*</span>
          <label>{labelText}</label>
        </div>
  
        <div className="flex gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={
                activeTab === tab
                  ? "border p-2 text-center rounded bg-[#707070] text-sm  w-[180px] font-medium text-white"
                  : "border p-2 rounded text-sm w-[180px]  font-medium"
              }
              onClick={() => handleActiveTab(tab)} // Handle tab click
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    );
  }