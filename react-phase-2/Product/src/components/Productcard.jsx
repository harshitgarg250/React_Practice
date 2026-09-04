function ProductCards(name , price , category, color){
    return (

        <div>
            <h2>{name}</h2>
            <p>price:{price}</p>
            <p>category:{category}</p>
            <p>color:{color}</p>
            <button>Book Now</button>
        </div>
    )
}
export default ProductCards;