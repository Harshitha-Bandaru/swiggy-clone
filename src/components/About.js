import { Outlet } from "react-router-dom";
import FunctionalProfile from "./Profile";
import ClassProfile from "./ProfileClass";
const About = () => {
  return (
    <div>
      <h1>About us</h1>
      <p>
        We are committed to deliver high quality food in best price, we make you
        feel home
      </p>
      {/* <Outlet /> */}
      <FunctionalProfile name={"Harshi"} />
      <ClassProfile name={"Sowmy"} />
    </div>
  );
};

export default About;
