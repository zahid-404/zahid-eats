import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurentCard from "./RestaurentCard";
import { API_URL } from "../utils/constant";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStaus";

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

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) return <h1>Check you internet connection</h1>;

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
          <Link
            key={restaurent.info.id}
            to={"restaurent/" + restaurent.info.id}
          >
            <RestaurentCard resData={restaurent} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
