const ShimmerMenu = () => {
  return (
    <div
      className="flex flex-col justify-around items-center my-8"
      data-testid="shimmer-menu"
    >
      {Array(5)
        .fill("")
        .map((e, i) => (
          <div className="w-4/6 p-2 my-4 h-36 bg-gray-200" key={i}></div>
        ))}
    </div>
  );
};
export default ShimmerMenu;
