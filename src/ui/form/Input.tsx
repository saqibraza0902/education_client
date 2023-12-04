import { cn } from "@/utils/styles";
import React, { useState } from "react";

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  InputClassName?: string;
}
const Input = ({ className, InputClassName, ...rest }: IInput) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div
      className={cn(
        `bg-white transition-all duration-300 w-full border rounded h-12 ${className}`,
        {
          "border-black": isFocused,
        }
      )}
    >
      <input
        {...rest}
        autoComplete="off"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={cn(
          `border-none text-sm dark:bg-brand_black-500 px-2 rounded w-full outline-none  h-11  ${InputClassName}`
        )}
      />
    </div>
  );
};

export default Input;
