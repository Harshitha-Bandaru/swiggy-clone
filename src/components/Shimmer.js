const Shimmer = () => {
  return (
    <div className="flex flex-wrap mt-[90px]">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div
            className="shimmer-card m-5 mt-0 bg-gray-300 w-52 h-52"
            key={index}
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
