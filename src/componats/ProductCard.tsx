import { FC } from "react";
import Image from "./Image";
import Button from "./Ui/Button";
import { IProduct } from "./interfaces";
import { TxtSlicer } from "./utils/functoins";
interface IProps {
product :IProduct

}

const Product: FC<IProps> = ({product}) => {
  const{title,price,descrition,imageURL}=product
  return (
    <div className="border rounded-md p-2 flex-col">
      <Image
        imageURl={imageURL}
        alt={"Product Name"}
        className="rounded-md mb-2"
      />
      <h3>{title}</h3>
      <p>
        {TxtSlicer(descrition)}
      </p>
      <div className="flex items-center my-4 space-x-1">
        <span className="w-5 h-5 bg-red-600 rounded-full  cursor-pointer" />
        <span className="w-5 h-5 bg-blue-600 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-yellow-400 rounded-full cursor-pointer" />
      </div>
      <div className="flex items-center justify-between">
        <span>{price}</span>
        <Image
          imageURl={imageURL}
          alt={"Product Name"}
          className="w-10 h-10 rounded-full object-bottom"
        />
      </div>
      <div className="flex items-center justify-between space-x-5 my-5">
        <Button className="bg-blue-500 ">Edit</Button>
        <Button className="bg-red-500 ">Delete</Button>
      </div>
    </div>
  );
};

export default Product;
