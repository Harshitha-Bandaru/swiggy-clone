const ShimmerMenu = () => {
  return (
    <div className="flex flex-col justify-around items-center my-8">
      {Array(5)
        .fill("")
        .map((e, i) => (
          <div
            className="w-4/6 p-2 my-4 h-36  flex flex-row justify-between bg-gray-200"
            key={i}
          ></div>
        ))}
    </div>
  );
};
export default ShimmerMenu;
