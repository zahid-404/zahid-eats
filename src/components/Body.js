import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  let [topRatedList, setTopRatedList] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            let filterList = topRatedList.filter(
              (restaurent) => restaurent.info.avgRating >= 4
            );
            console.log(filterList);
            setTopRatedList(filterList);
          }}
        >
          Top Rated Restaurents
        </button>
      </div>
      <div className="res-container">
        {topRatedList.map((restaurent) => (
          <RestaurentCard key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
