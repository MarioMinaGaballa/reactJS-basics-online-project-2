import ProductCard from "./componats/ProductCard";

const App = () => {
  return (
    <>
      <div className="
      border-2 m-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
      xl:grid-cols-4 gap-2 p-2 rounded-md text-center ">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  );
};

export default App;
