import { useContext } from "react";
import { CartContext } from "./CartContext";

const Products = () => {
  const { addToCart } = useContext(CartContext);

  const products = [
    { id: 1, name: "Shoes" },
    { id: 2, name: "T-shirt" },
  ];

  return (
    <div>
      <h2>Products</h2>

      {products.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>

          <button onClick={() => addToCart(item)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;