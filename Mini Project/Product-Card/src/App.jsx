import React from "react";
import ProductCard from "./components/ProductCard";

const products = [
  { name: "iPhone 18 Pro", price: 160000 },
  { name: "Samsung S25", price: 90000 },
  { name: "OnePlus 13", price: 70000 },
];
function App() {
  return (
    <div>
      {products.map((product, index) => {
        return (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
          />
        );
      })}
    </div>
  );
}

export default App;
