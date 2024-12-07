const ProductCard = ({ product }) => {
    return (
      <div className="border p-4 rounded shadow">
        <h3 className="text-xl font-bold">{product.name}</h3>
        <p className="text-gray-700">{product.description}</p>
        <p className="text-green-500 font-bold">₹{product.price}</p>
      </div>
    );
  };
  
  export default ProductCard;
  