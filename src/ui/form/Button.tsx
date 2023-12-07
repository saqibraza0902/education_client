import { cn } from "@/utils/styles";
import React from "react";
import { ClipLoader } from "react-spinners";
import {
  Button as ButtonComp,
  ButtonProps as MuiButtonProps,
} from "@mui/material";

interface ButtonComponentProps extends MuiButtonProps {
  children?: React.ReactNode;
  loading?: boolean;
}

const Button: React.FC<ButtonComponentProps> = ({
  children,
  className,
  loading = false,
  ...props
}: ButtonComponentProps) => {
  return (
    <ButtonComp
      {...props}
      className={cn(
        " !w-full !h-12 !disabled:opacity-50 !flex !gap-10 !rounded-lg text-center  !border !border-none   !text-white bg-brand_blue-400 ",
        className
      )}
    >
      {children}
      {loading && (
        <ClipLoader
          color="#fff"
          loading={true}
          size={20}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
    </ButtonComp>
  );
};

export default Button;
