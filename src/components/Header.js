import { useState, useContext } from "react";
import Logo from "../assets/img/Savoury.png";
import { Link } from "react-router-dom";
import useIsOnline from "../utils/useIsOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import LogoutIcon from "@mui/icons-material/Logout";

const Title = () => {
  return (
    <a href="/">
      <img
        data-testid="logo"
        className="h-24 w-28 p-4"
        src={Logo}
        alt="logo"
      ></img>
    </a>
  );
};

// const loggedinUser = () => {
//   return true;
// };

const Header = () => {
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
            <li className="px-2 hover:text-[#fc8019]  text-lg">
              <Link to="/">Home</Link>
            </li>
            <li className="px-2 hover:text-[#fc8019]  text-lg">
              <Link to="/about">About</Link>
            </li>
            <li className="px-2 hover:text-[#fc8019] text-lg">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="px-2 hover:text-[#fc8019]  text-lg">
              <Link to="/instamart">Instamart</Link>
            </li>
            <li className="px-2 hover:text-[#fc8019] text-lg">
              <Link to="/cart" data-testid="cart">
                Cart - {cartItemsCount}
              </Link>
            </li>

            {isLoggedin ? (
              <>
                <span className="text-lg hover:text-[#fc8019] px-2 cursor-pointer">
                  {isLoggedin ? user.userName : ""}
                </span>
                <span onClick={() => setIsLoggedin(false)}>
                  <LogoutIcon className="hover:text-[#fc8019] text-lg cursor-pointer" />
                </span>
              </>
            ) : (
              <button
                className="hover:text-[#fc8019] text-lg px-2"
                onClick={() => setIsLoggedin(true)}
              >
                Login
              </button>
            )}

            <li className="px-2 text-lg" data-testid="online-status">
              {isOnline ? "✅" : "🛑"}
            </li>
          </ul>
        </div>
        {/* {loggedinUser() ? <button>Logout</button> : <button>Login</button>} */}
      </div>
    </>
  );
};

// default export
export default Header;
