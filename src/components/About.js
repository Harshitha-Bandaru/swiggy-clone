import React from "react";
import { Outlet } from "react-router-dom";
import FunctionalProfile from "./Profile";
import ClassProfile from "./ProfileClass";
const About2 = () => {};

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent-constructor");
  }
  componentDidMount() {
    console.log("parent-componentDidMount");
  }
  render() {
    console.log("parent-render");
    return (
      <div>
        <h1>About us</h1>
        <p>
          We are committed to deliver high quality food in best price, we make
          you feel home
        </p>
        {/* <Outlet /> */}
        <ClassProfile name={"Child1"} />
        {/* <ClassProfile name={"Child2"} /> */}
        {/* <FunctionalProfile name={"child1"} /> */}
      </div>
    );
  }
}

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
