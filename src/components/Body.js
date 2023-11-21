import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import { API_URL } from "../utils/constant";
import Shimmer from "./Shimmer";

const Body = () => {
  let [listOfRestaurents, setListOfRestaurents] = useState([]);
  let [originalList, setOriginalList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    setListOfRestaurents(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setOriginalList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return !listOfRestaurents || listOfRestaurents.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        {/* top rated restaurent button */}
        <button
          className="filter-btn"
          onClick={() => {
            let topRatedRest = originalList.filter(
              (restaurent) => restaurent?.info?.avgRating >= 4
            );
            setListOfRestaurents(topRatedRest);
          }}
        >
          Top Rated Restaurents
        </button>

        {/* search bar */}
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            // filter restaurent
            let filterResList = originalList.filter((restaurent) =>
              restaurent?.info?.name
                .toLowerCase()
                .includes(searchText.toLowerCase())
            );
            setListOfRestaurents(filterResList);
          }}
        >
          Search
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
