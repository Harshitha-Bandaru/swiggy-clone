import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeItem, addItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleAddItem = (item) => {
    dispatch(addItem({ ...item, quantity: 1 }));
  };
  const handleRemoveItem = (item) => {
    dispatch(removeItem({ ...item, quantity: 1 }));
  };
  const totalPrice = cartItems.reduce((c, i) => {
    return c + i?.quantity * (i?.price / 100);
  }, 0.0);
  return (
    <div className="border border-black m-2">
      <h1 className="font-bold text-xl">Items</h1>
      {cartItems.map((item) => (
        <div className="flex flex-row justify-between">
          <h1>{item?.menuItemName}</h1>
          <div className="flex flex-row justify-between border border-black">
            <button
              className="border border-black"
              onClick={() => handleRemoveItem(item)}
            >
              -
            </button>
            <span>{item?.quantity}</span>
            <button
              className="border border-black"
              onClick={() => handleAddItem(item)}
            >
              +
            </button>
          </div>
          <h1>
            {item?.quantity}*{item?.price / 100}
          </h1>
          <h1>{(item?.price / 100) * item?.quantity}</h1>
        </div>
      ))}
      <h1>Total Price:{totalPrice}</h1>
      <button className="bg-red-400" onClick={() => handleClearCart()}>
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
