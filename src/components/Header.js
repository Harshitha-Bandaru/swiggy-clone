import { useState, useContext } from "react";
import Logo from "../assets/img/foodvilla logo.png";
import { Link } from "react-router-dom";
import useIsOnline from "../utils/useIsOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

// named export
export const Title = () => {
  return (
    <a href="/">
      <img className="h-24 p-3" src={Logo} alt="logo"></img>
    </a>
  );
};

// const loggedinUser = () => {
//   return true;
// };

const Header = () => {
  // const { user } = useContext(UserContext);
  const [isLoggedin, setIsLoggedin] = useState(false);

  const { user } = useContext(UserContext);
  const isOnline = useIsOnline();
  const cartItems = useSelector((store) => store.cart.items);
  const cartItemsCount = cartItems.reduce((count, item) => {
    return count + item.quantity;
  }, 0);
  return (
    <>
      <div className="flex justify-between shadow-md">
        <Title />
        <div>
          <ul className="flex py-10">
            <li className="px-2 hover:text-[#fc8019]  text-base">
              <Link to="/">Home</Link>
            </li>
            <li className="px-2 hover:text-[#fc8019]  text-base">
              <Link to="/about">About</Link>
            </li>
            <li className="px-2 hover:text-[#fc8019] text-base">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="px-2 hover:text-[#fc8019]  text-base">
              <Link to="/instamart">Instamart</Link>
            </li>
            <li className="px-2 hover:text-[#fc8019] text-base">
              <Link to="/cart">Cart - {cartItemsCount}</Link>
            </li>
            <li className="px-2 hover:text-[#fc8019]  text-base">
              {user.userName}
            </li>
            <li className="px-2 hover:text-[#fc8019]  text-base">
              {isLoggedin ? (
                <button onClick={() => setIsLoggedin(false)}>Login</button>
              ) : (
                <button onClick={() => setIsLoggedin(true)}>Logout</button>
              )}
            </li>
            <li className="px-2">{isOnline ? "✅" : "🛑"}</li>
          </ul>
        </div>
        {/* {loggedinUser() ? <button>Logout</button> : <button>Login</button>} */}
      </div>
    </>
  );
};

// default export
export default Header;
