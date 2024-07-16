import { FC } from "react";
import Image from "./Image";
import Button from "./Ui/Button";
import { IProduct } from "./interfaces";
import { TxtSlicer } from "./utils/functoins";
import CircleColor from "./CircleColor";
interface IProps {
  product: IProduct;
  setProductToEdit :(product :IProduct) =>void
  openEditModal:()=>void
  setProductToEditIdx:(value:number)=>void
  idx:number
}
const Product: FC<IProps> = ({ product,setProductToEdit,openEditModal,setProductToEditIdx,idx,}) => {
  const { title, price, description, imageURL, category,colors } = product;

  // ******************************************* Handlers*******************************************//
function onEdit(){
  setProductToEdit(product);
  openEditModal()
  setProductToEditIdx(idx)
}

  // ******************************************* Renders*******************************************//
  const renderProductColors = colors.map((color) => (
    <CircleColor
      key={color}
      color={color}
    />
  ));
  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex-col">
      <Image
        imageURl={imageURL}
        alt={product.title}
        className="rounded-md mb-2"
      />
      <h3>{title}</h3>
      <p>{TxtSlicer(description)}</p>
  
    
      <div className="flex items-center space-x-2 flex-wrap mt-3">
            {renderProductColors}
          </div>
    
      <div className="flex items-center justify-between ">
      <p className="text-lg text-indigo-600 font-semibold">
          ${Number(price).toLocaleString()}
        </p>
        <div className="flex gap-3">
      <span className="ml-4 pl-3 mt-3 text-xs font-bold">{category.name}</span>  
        <Image
          imageURl={imageURL}
          alt={category.name}
          className="w-10 h-10 rounded-full object-bottom"
            
        />
        </div>
      
      </div>
      <div className="flex items-center justify-between space-x-5 my-5">
        <Button className="bg-blue-500 " onClick={onEdit}>Edit</Button>
        <Button className="bg-red-500 ">Delete</Button>
      </div>
    </div>
  );
};
export default Product;
