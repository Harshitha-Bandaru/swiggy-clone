import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeItem, addItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();
  const totalPrice = cartItems.reduce((c, i) => {
    return c + i?.quantity * (i?.price / 100 || i?.defaultPrice / 100);
  }, 0.0);
  return (
    <div className="flex flex-row">
      <div className="border border-black m-2 p-5 w-1/3">
        <div className="address">
          <h1 className="text-base font-bold">Address</h1>
          <form className="flex flex-col">
            <div className="flex justify-between my-2">
              <label>Street:</label>
              <input
                type={"text"}
                className="border border-black rounded-sm p-1"
                placeholder="Street"
              ></input>
            </div>
            <div className="flex justify-between my-2">
              <label>Area:</label>
              <input
                type={"text"}
                className="border border-black rounded-sm p-1"
                placeholder="Area"
              ></input>
            </div>
            <div className="flex justify-between my-2">
              <label>Pincode:</label>
              <input
                type={"number"}
                className="border border-black rounded-sm p-1"
                placeholder="Pincode"
              ></input>
            </div>
            <div className="flex justify-between mt-2 mb-1">
              <label>Phone Number:</label>
              <input
                type={"number"}
                className="border border-black rounded-sm p-1"
                placeholder="Phone Number"
              ></input>
            </div>
            <br />
            <button
              type="submit"
              className="self-center border border-black p-2 rounded-md bg-[#60b246]"
            >
              Add Address
            </button>
          </form>
        </div>
        <div className="payment my-2">
          <h1 className="text-base font-bold">Choose Payment Method</h1>
          <button className="border border-black p-1 m-1 w-28 hover:shadow-xl focus:bg-green-500 rounded-md">
            Wallets
          </button>
          <br />
          <button className="border border-black p-1 m-1 w-28 hover:shadow-xl focus:bg-green-500 rounded-md">
            UPI
          </button>
          <br />
          <button className="border border-black p-1 m-1 w-28 hover:shadow-xl focus:bg-green-500 rounded-md">
            Sodexo
          </button>
          <br />
          <button className="border border-black p-1 m-1 w-28 hover:shadow-xl focus:bg-green-500 rounded-md">
            Netbanking
          </button>
          <br />
          <button className="border border-black p-1 m-1 w-28 hover:shadow-xl focus:bg-green-500 rounded-md">
            Credit & Debit Cards
          </button>
        </div>
      </div>
      <div className="cart-summary border border-black m-2 p-5 w-2/3">
        <h1 className="font-bold text-xl">Items</h1>
        {cartItems.map((item) => (
          <div className="flex flex-row justify-between items-center flex-grow my-2">
            <div className="w-3/6 ">
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
              ₹
              {(item?.price / 100 || item?.defaultPrice / 100) * item?.quantity}
            </h1>
          </div>
        ))}
        <div className="my-3">
          <h1 className="font-bold text-base">Bill Details</h1>
          <div className="flex justify-between">
            <span>Item Total</span>
            <span>₹{totalPrice}</span>
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
          <span>To pay</span>
          <span>₹{totalPrice + 40 + 90}</span>
        </div>
        <div className="flex justify-between my-3">
          <button
            className="bg-red-400 p-2 rounded-md"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
          <button className="bg-[#60b246] p-2 rounded-md">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
