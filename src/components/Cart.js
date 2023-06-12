import Address from "./Address";
import CartSummary from "./CartSummary";
import { useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return cartItems?.length === 0 ? (
    <EmptyCart />
  ) : (
    <div className="flex flex-row">
      <Address />
      <CartSummary />
    </div>
  );
};

export default Cart;
