import { FC, InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<IProps> = ({ ...rest }) => {
  return (
    <>
      <input
        type="text"
        className="border-[1px] border-gary-300 shadow-md 
        focus:border-indigo-500 focus:outline-none focus:ring-2
         focus:ring-indigo-500 rounded-xl px-3 py-3 text-md"
        {...rest}
      />
    </>
  );
};

export default Input;
