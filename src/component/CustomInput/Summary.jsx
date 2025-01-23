import React from "react";

export function Summary({content,pre}){

    return(
      <div className="flex flex-col gap-2 bg-[#fff] z-10 p-3 border border-[1px solid rgb(222, 228, 237)] mt-3 rounded-lg ">
   {pre? content.split("/n").map((item)=>( <p className="text-[#6f6e6e] text-sm ">{item}</p>)) : <p className="text-[#6f6e6e] text-sm ">{content}</p>}
  </div>
    )
  }