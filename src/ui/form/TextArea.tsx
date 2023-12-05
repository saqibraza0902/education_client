import { cn } from "@/utils/styles";
import React, { useEffect, useRef, useState } from "react";

interface IText extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}
const TextArea = ({ className, ...rest }: IText) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      // @ts-ignore
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setIsFocused(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <textarea
      ref={inputRef}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      className={cn(
        `outline-none w-full dark:bg-brand_black-500 p-4 rounded transition-all duration-300 border ${className}`,
        {
          "border-black": isFocused,
        }
      )}
      rows={6}
      {...rest}
    />
  );
};

export default TextArea;
