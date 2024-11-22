import React from "react";

export default function MyButton({
  children,
  className,
  onClick,
  variant = "primary",
  size = "md",
  disabled = false,
}) {
  const variants = {
    primary:
      "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
    secondary:
      "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded",
    danger:
      "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",
    // Add more variants as needed
  };

  const sizes = {
    sm: "py-1 px-2 text-xs",
    md: "py-2 px-4 text-sm",
    lg: "py-3 px-6 text-base",
    // Add more sizes as needed
  };

  return (
    <button
      className={`hover:scale-[105%] transition duration-800 ease-in-out transform hover:bg-[#77A9E8] text-[1.3em] hover:shadow-[0_0_50px_#77A9E8]
        ${variants[variant]}
        ${sizes[size]}
        ${className}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
