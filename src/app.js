import React from "react";
import ReactDOM from "react-dom/client";
//default import
import Header from "./components/Header.js";
import Body from "./components/Body";
import Footer from "./components/Footer.js";

//named import
//import { Title } from "./components/Header.js";
// import A from "../dummy";
/*Header
    Logo
    navbar
  Body
    Restaurant Cards
        -Image
        - Name
        - Rating
        - Cuisine
  Footer
    About us
    Contact links
    */

const styleObj = {
  backgroundColor: "red",
};

const AppLayout = () => (
  <>
    <Header />
    <Body />
    <Footer />
    {/* <A /> */}
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
