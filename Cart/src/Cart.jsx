import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { cart, increaseQty, decreaseQty, totalItems } =
    useContext(CartContext);

  return (
    <div>
      <h2>Cart 🛒</h2>

      <h3>Total Items: {totalItems}</h3>

      {cart.map((item) => (
        <div key={item.cartId}>
          <p>{item.name}</p>

          <button onClick={() => decreaseQty(item.id)}>−</button>
          <span> {item.quantity} </span>
          <button onClick={() => increaseQty(item.id)}>+</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;