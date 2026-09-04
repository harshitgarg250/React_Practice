import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div>
      <h1>Products</h1>

      <ProductCard
        name="iPhone 17 Pro"
        price={134000}
        category="Mobile"
      />

      <ProductCard
        name="MacBook Air"
        price={95000}
        category="Laptop"
      />

      <ProductCard
        name="AirPods Pro"
        price={25000}
        category="Audio" />
    </div>
  );
}

export default App;
