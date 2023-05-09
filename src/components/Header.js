import { useState, useContext } from "react";
import Logo from "../assets/img/foodvilla logo.png";
import { Link } from "react-router-dom";
import useIsOnline from "../utils/useIsOnline";
import UserContext from "../utils/UserContext";

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
  const { user } = useContext(UserContext);
  const [isLoggedin, setIsLoggedin] = useState(false);
  const isOnline = useIsOnline();
  return (
    <div className="flex justify-between shadow-md lg:bg-blue-200  sm:bg-green-400 md:bg-yellow-200">
      <Title />
      <div>
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-2">Cart</li>
          <li className="px-2">{isOnline ? "✅" : "🛑"}</li>
        </ul>
      </div>
      {/* {loggedinUser() ? <button>Logout</button> : <button>Login</button>} */}

      <span className="text-lg text-indigo-500 font-bold">{user.userName}</span>
      {isLoggedin ? (
        <button onClick={() => setIsLoggedin(false)}>Login</button>
      ) : (
        <button onClick={() => setIsLoggedin(true)}>Logout</button>
      )}
    </div>
  );
};

// default export
export default Header;
