import React from "react";

const MyInput = ({
  label,
  placeholder,
  onChange,
  value,
  className,
  ...rest
}) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`border outline-none border-x-0 border-y-[rgba(148,168,237,0.5)] p-2 rounded-md focus:ring-blue-100 focus:border-blue-300 w-full ${className}`}
        {...rest}
      />
    </div>
  );
};

export default MyInput;
