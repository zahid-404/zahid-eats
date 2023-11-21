import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import { API_URL } from "../utils/constant";
import Shimmer from "./Shimmer";

const Body = () => {
  let [listOfRestaurents, setListOfRestaurents] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    // console.log(json);
    setListOfRestaurents(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurents.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            let filterList = listOfRestaurents.filter(
              (restaurent) => restaurent?.info?.avgRating >= 4
            );
            // console.log(filterList);
            setListOfRestaurents(filterList);
          }}
        >
          Top Rated Restaurents
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurents.map((restaurent) => (
          <RestaurentCard key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
