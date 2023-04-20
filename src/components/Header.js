import { useState } from "react";
import Logo from "../assets/img/foodvilla logo.png";
// named export
export const Title = () => {
  return (
    <a href="/">
      <img className="logo" src={Logo} alt="logo"></img>
    </a>
  );
};

const loggedinUser = () => {
  return true;
};

const Header = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  return (
    <div className="header">
      <Title />

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      {/* {loggedinUser() ? <button>Logout</button> : <button>Login</button>} */}
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
