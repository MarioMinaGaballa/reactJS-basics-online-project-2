import { FC, HTMLAttributes } from "react";



interface IProps extends HTMLAttributes<HTMLSpanElement> {
  color: string;

}

const CircleColor: FC<IProps> = ({ color,...rest }) => {
  return (
    <>
    <span
      className={`inline-block w-5 h-5 mb-1  rounded-full  cursor-pointer`}
      style={{ backgroundColor: color }}
    {...rest}
    />
    </>
  );
};

export default CircleColor;
