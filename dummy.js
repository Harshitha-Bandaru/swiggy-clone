import React from "react";

const A = () => {
  const res = "";
  return (
    <div>
      <p>{res}</p>
      <B a="1" b="2" />
    </div>
  );
};

export default A;

const B = (p) => {
  console.log(p);
  return <div>B</div>;
};
