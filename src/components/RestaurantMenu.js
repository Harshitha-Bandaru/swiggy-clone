import { useParams } from "react-router-dom";
const RestaurantMenu = () => {
  //   const params = useParams();
  //   const { id } = params;
  // Destructure on the fly
  const { id } = useParams();
  //   console.log(params);
  return <h1>Restaurant id:{id}</h1>;
};
export default RestaurantMenu;
