import { FC, HTMLAttributes, ReactNode } from "react";

interface IProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  className?: string;
  width?: "w-full" | "w-fit";

}

const Button: FC<IProps> = ({
  children,
  width = "w-full",
  className,
  ...rest
}) => {
  return (
    <button
      className={`${className} ${width} rounded-lg  p-2 text-white cursor-pointer`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
