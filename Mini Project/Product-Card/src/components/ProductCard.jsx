import {useState} from 'react';

function ProductCard({ name, price }) {
  const [isBought, setIsBought] = useState(false);
  function handleBuy(){
 setIsBought(true);
}
  
  return (
    <div>
        <h1>Product Card</h1>
      <h2>Name: {name}</h2>
      <h2>Price: ₹{price} </h2>
      <p>{price >=10000 ? "Premium Product" :"Affordable"}</p>
      <button onClick={handleBuy}>Buy Now</button>
      {isBought && <p>Added to Cart  ✅ </p>}
    </div>
  );
}
export default ProductCard;     