import { ChangeEvent, FormEvent, useState } from "react";
import ProductCard from "./componats/ProductCard";
import Model from "./componats/Ui/Model";
import { colors, formInputsList, productList } from "./componats/data";
import Button from "./componats/Ui/Button";
import Input from "./componats/Ui/Input";
import { IProduct } from "./componats/interfaces";
import { peroductValidation } from "./componats/Validation";
import Errors from "./componats/Errors";
import CircleColor from "./componats/CircleColor";
import { v4 as uuid } from "uuid";
const App = () => {
  const defaultProductObj={
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      imageURL: "",
      name: "",
    },
  }
  //*******************************************STATES*******************************************//
  const [products, setProducts] = useState<IProduct[]>(productList);
  const [product, setProduct] = useState<IProduct>({
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      imageURL: "",
      name: "",
    },
  });
  const [isOpen, setIsOpen] = useState(false);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });
  const [tempColors, setTempColors] = useState<string[]>([]);
  console.log(tempColors);

  //*******************************************Handlers*******************************************//
  function closeModal() {
    setIsOpen(false);
    setProduct({
      title: "",
      description: "",
      imageURL: "",
      price: "",
      colors: [],
      category: {
        imageURL: "",
        name: "",
      },
    });
  }

  function openModal() {
    setIsOpen(true);
  }
  function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    const { value, name } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
    setErrors({ ...errors, [name]: "" });
  }
  function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { description, title, imageURL, price } = product;
    const errors = peroductValidation({
      description,
      title,
      imageURL,
      price,
    });
    console.log(errors);
    const hasErrorMsg =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");
    if (!hasErrorMsg) {
      setErrors(errors);
      return;
    }
     setProducts(prev => [{...product,id:uuid(),colors:tempColors},...prev])
     setProduct(defaultProductObj)
     setTempColors([])
     closeModal()
  }

  // ******************************************* Renders*******************************************//
  const renderProductList = products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  const renderFormInputList = formInputsList.map((input) => (
    <div className="flex flex-col" key={product.id}>
      <label
        htmlFor={input.id}
        className="mb-[2px] text-sm font-medium text-left text-gray-700 "
      >
        {input.label}
      </label>

      <Input
        type="text"
        id={input.id}
        name={input.name}
        value={product[input.name]}
        onChange={onChangeHandler}
      />
      {errors[input.name] && <Errors msg={errors[input.name]} />}
    </div>
  ));
  const renderProductColors = colors.map((color) => (
    <CircleColor
      key={color}
      color={color}
      onClick={() => {
        if(tempColors.includes(color)){
          setTempColors(prev=>prev.filter(item => item !==color))
          return;
        }
        setTempColors(() => [...tempColors, color]);
      }}
    />
  ));

  return (
    <main className="container">
      <div className="mt-2 flex justify-center">
        <Button
          onClick={openModal}
          className="bg-indigo-600 text-white"
          width="w-fit"
        >
          Add new Product
        </Button>
      </div>

      <div
        className="
      border-2 m-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
      xl:grid-cols-4 gap-2 md:gp-4 p-2 rounded-md text-center"
      >
        {renderProductList}
      </div>

      <Model isOpen={isOpen} closeModal={closeModal} title="ADD A NEW PRODUCT">
        <form className="space-y-3" onSubmit={submitHandler}>
          {renderFormInputList}

          <div className="flex items-center space-x-2 flex-wrap">
            {renderProductColors}
          </div>

          <div className="flex items-center space-x-2 flex-wrap">
            {tempColors.map((color) => (
              <span
                key={color}
                className="p-1 mr-1 mb-1 text-xs rounded-md text-white"
                style={{ backgroundColor: color }}
              >
                {color}
              </span>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <Button className="bg-blue-500 hover:bg-blue-300">submit</Button>
            <Button
              className="bg-red-500 hover:bg-red-400"
              onClick={closeModal}
            >
              cancel
            </Button>
          </div>
        </form>
      </Model>
    </main>
  );
};

export default App;
