import { FC } from "react";

interface IProps {
  imageURl: string;
  alt: string;
  className: string;
}

const Image: FC<IProps> = ({ imageURl, alt, className }) => {
  return (
    <div>
      <img src={imageURl} alt={alt} className={className} />
    </div>
  );
};

export default Image;
