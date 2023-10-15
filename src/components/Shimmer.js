const Shimmer = () => {
  return (
    <div
      className="flex flex-wrap mt-[90px] justify-around"
      data-testid="shimmer"
    >
      {Array(12)
        .fill("")
        .map((e, index) => (
          <div
            // className="shimmer-card m-5 mt-0 bg-gray-300 w-52 h-52"
            className="card w-72 p-2 m-3 h-80  flex flex-col justify-between items-start bg-gray-200"
            key={index}
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
