import RestaurantCard from "./RestaurantCard";
import { restaurantsList } from "../constants";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import UserContext from "../utils/UserContext";
import { swiggyAPI } from "../constants";

//no key<<index key<unique key
//id:323673-this has default price
const Body = () => {
  const [searchText, setSearchText] = useState("");
  //   const [searchClicked, setSearchClicked] = useState("false");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const { user, setUser } = useContext(UserContext);
  // console.log(restaurants);

  // useEffect(() => {
  //   console.log("use effect is called");
  // }, []);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(swiggyAPI);
    console.log(data);
    const json = await data.json();
    console.log(json?.data);
    // const restaurantsArray = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    const restaurantsArray =
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setAllRestaurants(restaurantsArray);
    setFilteredRestaurants(restaurantsArray);
  }

  console.log("render");
  // const isOnline = useIsOnline();
  // if (!isOnline) {
  //   return <h1>OOPS!Check your internet connection"</h1>;
  // }
  // if (!allRestaurants) {
  //   return null;
  // }
  //early return
  // if (filteredRestaurants?.length === 0)
  //   return <h1>No restaurants match your filter!</h1>;

  return !allRestaurants?.length ? (
    <Shimmer />
  ) : (
    <>
      <div className="p-3 mb-2">
        <input
          data-testid="input-btn"
          type="text"
          className="bg-transparent m-1 p-1 rounded-sm focus:border-black"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>

        <button
          data-testid="search-btn"
          type="submit"
          className="search-btn rounded-md m-1 p-1 bg-[#48c479] w-fit text-white"
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
        {/* <input
          type="text"
          value={user.userName}
          onChange={(e) => {
            setUser({
              ...user,
              userName: e.target.value,
            });
          }}
        ></input>
        <input
          type="text"
          value={user.userEmail}
          onChange={(e) => {
            setUser({
              ...user,
              userEmail: e.target.value,
            });
          }}
        ></input> */}
      </div>
      <div
        className="restaurants-list flex flex-wrap justify-around"
        data-testid="res-list"
      >
        {/* {RestaurantCard({ restaurant: restaurantsList[0] })} */}
        {/* <RestaurantCard {...restaurantsList[0].data} />
      <RestaurantCard {...restaurantsList[1].data} />
      <RestaurantCard {...restaurantsList[2].data} />
      <RestaurantCard {...restaurantsList[3].data} /> */}
        {/* Write logic for no restaurants found, here */}
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurants/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurantCard {...restaurant.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
