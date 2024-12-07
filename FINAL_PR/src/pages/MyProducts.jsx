import ProductCard from "../components/ProductCard";

const MyProducts = () => {
  const products = [
    { id: 1, name: "Wheat", price: "1000", description: "High-quality wheat." },
    { id: 2, name: "Rice", price: "1500", description: "Organic rice." },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">My Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default MyProducts;
