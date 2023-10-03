import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL, MENU_ITEM_IMAGE } from "../constants";
import useRestaurant from "../utils/useRestaurant";
import StarIcon from "@mui/icons-material/Star";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice.js";
import nonVegIcon from "../assets/img/nonVegIcon.png";
import vegIcon from "../assets/img/vegIcon.png";
import ShimmerMenu from "./ShimmerMenu";

const RestaurantMenu = () => {
  //   const params = useParams();
  //   const { id } = params;
  // Destructure on the fly
  const { id } = useParams();
  // const [restaurant, setRestaurant] = useState({});
  const [restaurantData, restaurantMenu] = useRestaurant(id);
  const {
    name,
    areaName,
    cuisines,
    avgRatingString,
    totalRatingsString,
    costForTwoMessage,
  } = restaurantData;
  const lastMileTravelString = restaurantData?.sla?.lastMileTravelString;
  const deliveryTime = restaurantData?.sla?.slaString;

  // console.log(restaurantMenu);
  // console.log(restaurantMenu.length);
  // console.log(restaurantMenu.length === 0);

  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem({ ...item, quantity: 1 }));
  };

  //   console.log(params);
  // console.log(restaurant.name);
  // if (!restaurant) {
  //   return <Shimmer />;
  // }
  return restaurantMenu.length === 1 ? (
    <ShimmerMenu />
  ) : (
    <div className="flex flex-col justify-around items-center my-8">
      <div className="flex flex-row justify-between  w-4/6">
        <div>
          <div>
            <h2 className="text-lg font-bold">{name}</h2>
            <h3 className="text-gray-500 text-sm">{cuisines?.join(",")}</h3>
            <span className="text-gray-500 text-sm">{areaName}, </span>
            <span className="text-gray-500 text-sm">
              {lastMileTravelString}
            </span>
            <div className="mt-3">
              <span className="text-base font-bold">{deliveryTime} </span>
              <span className="text-base font-bold">{costForTwoMessage}</span>
            </div>
          </div>
        </div>
        <div className="border border-solid flex flex-col items-center justify-around p-2 m-2">
          <div
            className={`w-12 flex items-center p-1 ${
              parseFloat(avgRatingString) >= 4.0
                ? "bg-[#48c479]"
                : "bg-[#db7c38]"
            }`}
          >
            {/* <img src={star} className="h-4 w-4"></img> */}
            <StarIcon fontSize="22px" className="text-white" />
            <span className="text-xs text-white ml-1">{avgRatingString}</span>
          </div>
          <hr className="border border-solid my-1 w-full" />
          <div>
            <h3 className="text-gray-500 text-sm">{totalRatingsString}</h3>
          </div>
        </div>
      </div>

      <div className="w-4/6 ">
        <ul>
          {restaurantMenu.map((item) => (
            <div
              key={item?.id}
              className="flex justify-between items-center my-4 border border-t-gray-300 border-b-0 border-x-0 p-2"
            >
              <div className="w-3/4">
                {item?.isVeg ? (
                  <img src={vegIcon} alt="Veg Icon" className="h-6 w-6"></img>
                ) : (
                  // <vegNonveg className="text-green-300" />
                  <img
                    src={nonVegIcon}
                    alt="Non Veg Icon"
                    className="h-6 w-6"
                  ></img>
                )}
                <li className="text-base font-semibold mt-1">
                  {item?.menuItemName}
                </li>
                <li className=" text-sm font-medium mt-1">
                  ₹{item?.price / 100 || item?.defaultPrice / 100}
                </li>
                <p className="text-sm  text-gray-400 mt-2">
                  {item?.description}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="w-28 h-24"
                  src={MENU_ITEM_IMAGE + item?.imageId}
                />
                <button
                  className="px-4 py-2 m-2 text-[#60b246] text-sm font-semibold border border-solid rounded-md hover:shadow-lg"
                  onClick={() => handleAddItem(item)}
                >
                  ADD
                </button>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
