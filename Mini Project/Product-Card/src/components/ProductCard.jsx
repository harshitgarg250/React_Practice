function ProductCard({ name, price }) {
  return (
    <div>
        <h1>Product Card</h1>
      <h2>Name: {name}</h2>
      <h2>Price: ₹{price}</h2>
    </div>
  );
}
export default ProductCard;