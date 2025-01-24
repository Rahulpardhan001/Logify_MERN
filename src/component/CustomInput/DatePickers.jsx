import React from 'react'
import DatePicker from 'react-datepicker'
import { useDispatch } from 'react-redux';
import { updatedFormData } from '../../ReduxToolkit/Slice/FormSlice';

export function DatePickers({inputlabel,dateFormat,placeholderText,selected,onChange,dropdownMode}) {
  const dispatch = useDispatch()

  return (
    <div className="bg-[#fff] z-10 p-3 border border-[1px solid rgb(222, 228, 237)] mt-3 rounded-lg  ">
    <div className="flex gap-2">
      <span className="text-teal-500">*</span>
      <label
        className="flex text-normal-text items-center gap-1"
        htmlFor=""
      >
        {inputlabel}
      </label>
    </div>
    <DatePicker
      className="mt-1 px-3 py-2 focus-visible:outline-none  bg-[#f1f2f3] rounded-md    w-[370px] sm:text-sm"
      dateFormat={dateFormat}
      placeholderText={placeholderText}
      peekNextMonth
      showMonthDropdown
      selected={selected}
      onChange={onChange}
      showYearDropdown
      dropdownMode={dropdownMode}
      minDate={new Date()}
    />
  </div>
  )
}

