import React from "react";
import { Outlet } from "react-router-dom";
import FunctionalProfile from "./Profile";
import ClassProfile from "./ProfileClass";
import UserContext from "../utils/UserContext";
import { ABOUT_IMG } from "../constants";
const About2 = () => {};

// class About extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log("parent-constructor");
//   }
//   componentDidMount() {
//     console.log("parent-componentDidMount");
//   }
//   render() {
//     console.log("parent-render");
//     return (
//       <div>
//         <h1>About us</h1>
//         <p>
//           We are committed to deliver high quality food in best price, we make
//           you feel home
//         </p>
//         <UserContext.Consumer>
//           {({ user }) => {
//             // console.log(value);
//             return (
//               <p className="text-md text-black">
//                 {user.userName}-{user.userEmail}
//               </p>
//             );
//           }}
//         </UserContext.Consumer>

//         {/* <Outlet /> */}
//         <ClassProfile name={"Child1"} />
//         {/* <ClassProfile name={"Child2"} /> */}
//         {/* <FunctionalProfile name={"child1"} /> */}
//       </div>
//     );
//   }
// }
//url('https://careers.swiggy.com/assets/img/banner2.jpg')

const About = () => {
  return (
    <div className="bg-[url('https://careers.swiggy.com/assets/img/banner2.jpg')] flex flex-col justify-around items-start bg-cover h-screen p-6">
      <h1 className="text-white text-5xl">What's the Savoury story? </h1>
      <p className="text-white text-xl">
        With love and support from consumers, Savoury expanded far and wide,
        first through the entire city of Pune and then across the entire
        country. Today, Savoury is the leading food ordering and delivery
        platform in India.
      </p>
      <button className="text-white bg-[#ff8710] rounded-3xl text-xl py-4 px-12">
        Our Journey
      </button>
    </div>
  );
};

export default About;

/**
 * Parent - constructor
 * Parent - render
 * Child - constructor
 * Child - render
 * Parent - componentDidMount
 * Child - data is logged
 * Child - componentDidMount
 * Child - render (updating)
 */

/**
 * When there are two children, react first completes the render phase and goes to commit phase
 * Parent - constructor
 * Parent - render
 *  child1- constructor
 *  child1 - render
 *  child2 - constructor
 *  child2 - render
 *  -- DOM is updated for both the children
 *  child1 - componentDidMount
 *  child2 - componentDidMount
 * Parent - copmonentDidMount
 *
 */
