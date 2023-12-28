import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurentCard, { withPromotedLabel } from "./RestaurentCard";
import { API_URL } from "../utils/constant";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStaus";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Body = () => {
  // State for the list of restaurants and the original list
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [originalList, setOriginalList] = useState([]);
  // State for the search text
  const [searchText, setSearchText] = useState("");

  // HOC to add a "promoted" label to the restaurant card
  const RestaurentCardPromoted = withPromotedLabel(RestaurentCard);

  // Fetch data from the API
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // Simulate a delay to show the Shimmer loading effect
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Fetch data from the API
    const data = await fetch(API_URL);
    const json = await data.json();

    // Set the list of restaurants and the original list
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setOriginalList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // Check online status
  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) return <h1>Check your internet connection</h1>;

  return !listOfRestaurants || listOfRestaurants.length === 0 ? (
    // Show Shimmer loading effect
    <Shimmer />
  ) : (
    // Main Container
    <div className="flex mx-auto items-center my-10 md:my-16 flex-col gap-y-3 ">
      <div className="flex flex-col md:flex-row gap-x-8">
        {/* Search bar container */}
        <div className="flex relative">
          {/* Search bar input */}
          <Input
            type="text"
            className="w-64 md:w-80 mx-4 md:mx-8 relative"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></Input>
          {/* Button for filtering restaurants */}
          <Button
            onClick={() => {
              // Filter restaurants based on the search text
              let filteredResList = originalList.filter((restaurant) =>
                restaurant?.info?.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setListOfRestaurants(filteredResList);
            }}
          >
            Search
          </Button>
        </div>
        {/* Top-rated restaurant button */}
        <Button
          variant="ghost"
          className="my-4 w-fit md:my-0 mx-auto"
          onClick={() => {
            // Filter top-rated restaurants
            let topRatedRestaurants = originalList.filter(
              (restaurant) => restaurant?.info?.avgRating >= 4
            );
            setListOfRestaurants(topRatedRestaurants);
          }}
        >
          Top Rated Restaurants
        </Button>
      </div>
      {/* Restaurant card container */}
      <div className="flex flex-wrap items-center justify-center my-16 gap-4">
        {listOfRestaurants.map((restaurant) => (
          <Link
            className="outline-0 ring-primary transition duration-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg"
            key={restaurant.info.id}
            to={"restaurant/" + restaurant.info.id}
          >
            {/* Display promoted ribbon for promoted restaurants */}
            {restaurant.info.promoted ? (
              <RestaurentCardPromoted resData={restaurant} />
            ) : (
              <RestaurentCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
