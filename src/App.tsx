import { ChangeEvent, FormEvent, useState } from "react";
import ProductCard from "./componats/ProductCard";
import Model from "./componats/Ui/Model";
import { formInputsList, productList } from "./componats/data";
import Button from "./componats/Ui/Button";
import Input from "./componats/Ui/Input";
import { IProduct } from "./componats/interfaces";

const App = () => {
  // ** STATE
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


  // ** Handlers
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
    })
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
  }
  function submitHandler(e:FormEvent<HTMLFormElement>){
    e.preventDefault();

  }

  // ** Renders
  const renderProductList = productList.map((product) => (
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
    </div>
  ));

  return (
    <main className="container">
      <Button className="bg-blue-500 hover:bg-blue-300" onClick={openModal}>
        Add
      </Button>

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
