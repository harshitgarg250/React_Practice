// import ProductCards  from './components/ProductCard';
 function App (){
  return (
    <div>
      <h1>Product Store</h1>

      <ProductCard
        name="iPhone 17 Pro"
        price={134000}
        category="Mobile"
        color="Orange"
      />

      <ProductCard
        name="MacBook Air"
        price={95000}
        category="Laptop"
        color="Silver"
      />

      <ProductCard
        name="AirPods Pro"
        price={25000}
        category="Audio"
        color="White"
      />
    </div>
  )
 }

 export default App;