import { EMPTY_CART_IMG } from "../constants";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center my-16">
      <img src={EMPTY_CART_IMG} className="w-72 h-64"></img>
      <p className="font-semibold text-xl mt-6 text-[#535665]">
        Your cart is empty
      </p>
      <p className="mt-2 text-[#7e808c]">
        You can go to home page to view more restaurants
      </p>
      <Link to="/">
        <button className="mt-8 py-3 px-5 bg-[#fc8019] text-white font-semibold text-base">
          SEE RESTAURANTS NEAR YOU
        </button>
      </Link>
    </div>
  );
};
export default EmptyCart;
