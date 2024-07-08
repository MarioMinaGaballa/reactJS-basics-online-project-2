import { FC } from "react";

interface IProps {
  color: string;
}

const CircleColor: FC<IProps> = ({ color }) => {
  return (
    <span
      className={`inline-block w-5 h-5  rounded-full  cursor-pointer`}
      style={{ backgroundColor: color }}
    />
  );
};

export default CircleColor;
