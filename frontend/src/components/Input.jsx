import React from "react";




export default function Input({label, type, name, placeholder, value, onChange, className, rightIcon, onRightIconClick}) {
 
  

  return(

    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">
        {label}
      </label>

      <div className="relative">
      <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${className}`}
      />

      {rightIcon && (

        <button

        type="button"
        onClick={onRightIconClick}
        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
        >{rightIcon}</button>
      )}
      </div>
    </div>

  );


}