import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <h1 className="font-bold text-3xl">Cart Items</h1>
      {cartItems.map((item) => {
        return <h1>{item}</h1>;
      })}
      <button className="bg-red-400" onClick={() => handleClearCart()}>
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
