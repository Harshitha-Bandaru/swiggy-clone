import React from "react";
import ReactDOM from "react-dom/client";

/*Header
    Logo
    navbar
  Body
    Restaurant Cards
        -Image
        - Name
        - Rating
  Footer
    About us
    Contact links
    */

function Title() {
  return <h1>Food Villa</h1>;
}
const HeaderComponent = () => <Title />;
const AppLayout = () => {
  return (
    <div className="header">
      <HeaderComponent />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Cart</li>
        </ul>
        {(function () {
          setTimeout(() => {
            console.log("Hi");
          }, 5000);
        })()}
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
