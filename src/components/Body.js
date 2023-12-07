import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurentCard from "./RestaurentCard";
import { API_URL } from "../utils/constant";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStaus";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Body = () => {
  let [listOfRestaurents, setListOfRestaurents] = useState([]);
  let [originalList, setOriginalList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);
    await new Promise((resolve) => setTimeout(resolve, 2000));
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
    // Main Container
    <div className="flex mx-auto items-center my-10 md:my-16 flex-col gap-y-3 ">
      <div className="flex flex-col md:flex-row gap-x-8">
        {/* Search bar container */}
        <div className="flex relative">
          {/* search bar */}
          <Input
            type="text"
            className="w-64 md:w-80 mx-4 md:mx-8 relative"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></Input>
          {/* Button for filter */}
          <Button
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
          </Button>
        </div>
        {/* top rated restaurent button */}
        <Button
          varient="ghost"
          className="my-4 w-fit md:my-0 mx-auto"
          onClick={() => {
            let topRatedRest = originalList.filter(
              (restaurent) => restaurent?.info?.avgRating >= 4
            );
            setListOfRestaurents(topRatedRest);
          }}
        >
          Top Rated Restaurents
        </Button>
      </div>
      {/* res card conatainer */}
      <div className="flex flex-wrap items-center justify-center my-16 gap-4">
        {listOfRestaurents.map((restaurent) => (
          <Link
            className="outline-0 ring-primary transition duration-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg"
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
