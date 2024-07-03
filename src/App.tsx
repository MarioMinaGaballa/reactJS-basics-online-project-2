import { useState } from "react";
import ProductCard from "./componats/ProductCard";
import Model from "./componats/Ui/Model";
import { formInputsList, productList } from "./componats/data";
import Button from "./componats/Ui/Button";
import Input from "./componats/Ui/Input";

const App = () => {
  // ** STATE
  const [isOpen, setIsOpen] = useState(false);
  // ** Handlers
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  // ** Renders
  const renderProductList = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
  const renderFormInputList = formInputsList.map((input) => (
    <div className="flex flex-col">
      <label htmlFor={input.id} className="mb-[2px] text-sm font-medium text-left text-gray-700 ">{input.label}</label>
      <Input type="text" id={input.id} name={input.id} />
    </div>
  ));

  return (
    <main className="container">
      <Button className="bg-blue-500 hover:bg-blue-300" onClick={openModal}>
        Add
      </Button>
      <div
        className="
      border-2 m-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
      xl:grid-cols-4 gap-2 md:gp-4 p-2 rounded-md text-center "
      >
        {renderProductList}
      </div>
      <Model isOpen={isOpen} closeModal={closeModal} title="ADD A NEW PRODUCT" >
        <div className="space-y-3">
        {renderFormInputList}
        <div className="flex items-center space-x-3">
          <Button className="bg-blue-500 hover:bg-blue-300">submit</Button>
          <Button className="bg-red-500 hover:bg-red-400" onClick={closeModal}>cancel</Button>
        </div>
        </div>
      </Model>
    </main>
  );
};

export default App;
