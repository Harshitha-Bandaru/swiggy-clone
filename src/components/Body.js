import RestaurantCard from "./RestaurantCard";
import { restaurantsList } from "../constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useIsOnline from "../utils/useIsOnline";

//no key<<index key<unique key
const Body = () => {
  const [searchText, setSearchText] = useState("");
  //   const [searchClicked, setSearchClicked] = useState("false");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  // console.log(restaurants);

  // useEffect(() => {
  //   console.log("use effect is called");
  // }, []);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&page_type=DESKTOP_WEB_LISTING"
    );
    console.log(data);
    const json = await data.json();
    console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  const isOnline = useIsOnline();
  if (!isOnline) {
    return "OOPS!Check your internet connection";
  }
  if (!allRestaurants) {
    return null;
  }
  //early return
  // if (filteredRestaurants?.length === 0)
  //   return <h1>No restaurants match your filter!</h1>;

  console.log("render");
  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>

        <button
          type="submit"
          className="search-btn"
          onClick={() => {
            // if (searchClicked === "true") {
            //   setSearchClicked("false");
            // } else {
            //   setSearchClicked("true");
            // }
            const filteredData = filterData(searchText, allRestaurants);
            setFilteredRestaurants(filteredData);
          }}
        >
          {/* Search - {searchText} */}
          Search
        </button>
        {/* <h1>{searchClicked}</h1> */}
      </div>
      <div className="restaurants-list">
        {/* {RestaurantCard({ restaurant: restaurantsList[0] })} */}
        {/* <RestaurantCard {...restaurantsList[0].data} />
      <RestaurantCard {...restaurantsList[1].data} />
      <RestaurantCard {...restaurantsList[2].data} />
      <RestaurantCard {...restaurantsList[3].data} /> */}
        {/* Write logic for no restaurants found, here */}
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurants/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
