import ProductCard from "./componats/ProductCard";
import { productList } from "./componats/data";

const App = () => {
  const renderProductList = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
  return (
    <main className="container">
      <div
        className="
      border-2 m-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
      xl:grid-cols-4 gap-2 md:gp-4 p-2 rounded-md text-center "
      >
        {renderProductList}
      </div>
    </main>
  );
};

export default App;
