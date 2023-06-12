import { clearCart, removeItem, addItem } from "../utils/cartSlice";
import nonVegIcon from "../assets/img/nonVegIcon.png";
import vegIcon from "../assets/img/vegIcon.png";
import { useSelector, useDispatch } from "react-redux";

const CartSummary = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();
  const totalPrice = cartItems.reduce((c, i) => {
    return c + i?.quantity * (i?.price / 100 || i?.defaultPrice / 100);
  }, 0.0);
  return (
    <div className="cart-summary border border-black m-2 p-5 w-2/3">
      <h1 className="font-bold text-xl">Items</h1>
      {cartItems.map((item) => (
        <div className="flex flex-row justify-between items-center flex-grow my-2">
          <div className="w-3/6 flex flex-row">
            {item?.isVeg ? (
              <img src={vegIcon} alt="Veg Icon" className="h-6 w-6 mr-1"></img>
            ) : (
              <img
                src={nonVegIcon}
                alt="Non Veg Icon"
                className="h-6 w-6 mr-1"
              ></img>
            )}
            <h1 className="text-base font-normal">{item?.menuItemName}</h1>
          </div>
          <div className="w-1/6  ">
            <div className="flex flex-row justify-between items-center border border-gray-400 px-1 w-16">
              <button
                className="border-none text-gray-400"
                onClick={() => dispatch(removeItem({ ...item, quantity: 1 }))}
              >
                -
              </button>
              <span className="text-[#60b246]">{item?.quantity}</span>
              <button
                className="border-none text-[#60b246]"
                onClick={() => dispatch(addItem({ ...item, quantity: 1 }))}
              >
                +
              </button>
            </div>
          </div>
          <h1 className="w-1/6  text-base text-gray-600 font-normal text-center">
            {item?.quantity}*{item?.price / 100 || item?.defaultPrice / 100}
          </h1>
          <h1 className="w-1/6  text-base text-gray-600 font-normal text-end ">
            ₹{(item?.price / 100 || item?.defaultPrice / 100) * item?.quantity}
          </h1>
        </div>
      ))}
      <div className="my-3">
        <h1 className="font-bold text-base">Bill Details</h1>
        <div className="flex justify-between">
          <span>Item Total</span>
          <span>₹{totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Fee</span>
          <span>₹40</span>
        </div>
        <div className="flex justify-between">
          <span>GST and Restaurant Charges</span>
          <span>₹90</span>
        </div>
      </div>
      <hr className="border border-black" />
      <div className="my-2 flex justify-between">
        <span className="font-bold text-sm">TO PAY</span>
        <span className="font-bold text-sm">
          ₹{(totalPrice + 40 + 90).toFixed(2)}
        </span>
      </div>
      <div className="flex justify-between my-3">
        <button
          className="bg-red-400 p-2 rounded-md text-white font-medium"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>
        <button className="bg-[#60b246] p-2 rounded-md text-white font-medium">
          Checkout
        </button>
      </div>
    </div>
  );
};
export default CartSummary;
