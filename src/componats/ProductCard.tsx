import { FC } from "react";
import Image from "./Image";
import Button from "./Ui/Button";
interface IProps {}

const Product: FC<IProps> = () => {
  return (
    <div className="border rounded-md p-2 flex-col">
      <Image
        imageURl={
          "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt={"Product Name"}
        className="rounded-md mb-2"
      />
      <h3>2022 Gebnesis GV70 : Nomine</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, sunt?
        Odio error reprehenderit nobis est!
      </p>
      <div className="flex items-center my-4 space-x-1">
        <span className="w-5 h-5 bg-red-600 rounded-full  cursor-pointer" />
        <span className="w-5 h-5 bg-blue-600 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-yellow-400 rounded-full cursor-pointer" />
      </div>
      <div className="flex items-center justify-between">
        <span>$500,00</span>
        <Image
          imageURl={
            "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt={"Product Name"}
          className="w-10 h-10 rounded-full object-bottom"
        />
      </div>
      <div className="flex items-center justify-between space-x-5 my-5">
        <Button
          className="bg-blue-500 " 
        >
          Edit
        </Button>
        <Button className="bg-red-500 ">Delete</Button>
      </div>
    </div>
  );
};

export default Product;
