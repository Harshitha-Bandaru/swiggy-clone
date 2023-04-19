import { useState } from "react";
// named export
export const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        src="https://lh3.googleusercontent.com/p/AF1QipO_6cTc3QdC9L2vAOyCkUPG-G-9YeFxo3YiDu3R=w1080-h608-p-no-v0"
        alt="logo"
      ></img>
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
