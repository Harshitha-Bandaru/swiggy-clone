import { useEffect, useState } from "react";

const Profile = ({ name }) => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(6);
  useEffect(() => {
    //some API call
    // timer = setInterval(() => {
    //   console.log("setInterval");
    // }, 1000);

    // return () => {
    //   clearInterval(timer);
    // };

    setTimeout(() => {
      console.log("setTimeout");
    }, 1000);
  }, []);
  // useEffect(() => {
  //   //some API call
  // }, count2);
  return (
    <div>
      <h2>This is functional component, ...</h2>
      <h3>Name:{name}</h3>
      <h3>count1:{count1}</h3>
      <h3>count2:{count2}</h3>
      <button
        onClick={() => {
          setCount1(count2);
        }}
      >
        count
      </button>
    </div>
  );
};
export default Profile;
