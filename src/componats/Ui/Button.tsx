import { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
  width?: "w-full" | "w-fit";
  onClick?: () => void;
  onSubmit?: () => void;
}

const Button: FC<IProps> = ({
  children,
  width = "w-full",
  className,
  ...rest
}) => {
  return (
    <button
      className={`${className} ${width} w-full rounded-lg  p-2 text-white`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
