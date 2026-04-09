import CartProvider from "./CartProvider";
import Products from "./Products";
import Cart from "./Cart";

function App() {
  return (
    <CartProvider>
      <Products />
      <Cart />
    </CartProvider>
  );
}

export default App;