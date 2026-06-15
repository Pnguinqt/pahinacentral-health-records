import React from "react";


const baseStyles =  "inline-flex items-center justify-center gap-2 font-medium rounded-md transition-colors duration-200 focus:outline-none disabled:opacity-50 disable:cursor-not-allowed";

const variants = {
   primary:
   "bg-[#F5A623] text-[#1A3A5C] hover:brightness-95",
   secondary:
   "bg-[#FFFFFF] text-[#1A3A5C] border-1 border-[#1A3A5C] hover:bg-[#1A3A5C] hover:text-white transition-colors duration-200",
   outline:
   "bg-transparent border border-[#2E7D5E] text-[#2E7D5E] hover:bg-[#2E7D5E] hover:text-white trasition-colors duration-200",
   danger:
   "bg-[#DC3545] text-white hover:opacity-90",
};

const sizes = {
   sm: "text-sm px-3 py-1.5",
   md: "text-sm px-4 py-2",
   lg: "text-base px-6 py-3",
}

export default function Button({
   children,
   variant = "primary",
   size = "md",
   type = "button",
   disabled = false,
   onClick, 
   className ="",
   leftIcon,
   rightIcon,
}) {

   const variantClass = variants[variant] || variants.primary;
   const variantSize = sizes[size] || sizes.md;

   return(
      <button
       type={type}
       disabled={disabled}
       onClick={onClick}
       className={`${baseStyles} ${variantClass} ${variantSize} ${className}`}
       >
         {leftIcon && <span className="flex items-center">{leftIcon}</span>}
         {children}
         {rightIcon && <span className="flex items-center">{rightIcon}</span>}
       </button>
   );
}