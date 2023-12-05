import { CDN_URL } from "../utils/constant";

const RestaurentCard = (props) => {
  const { resData } = props;
  const {
    name,
    avgRating,
    cuisines,
    areaName,
    cloudinaryImageId,
    aggregatedDiscountInfoV3,
  } = resData?.info;
  return (
    <div className="">
    <div className="res-card w-[150px] h-[150px ] ">
      <div className="img-container">
        <img className="cart-img w-auto h-full" src={CDN_URL + cloudinaryImageId} />
        <div className="discount">{aggregatedDiscountInfoV3?.header}</div>
      </div>
      <h3>{name}</h3>
      <h4>{avgRating} ⭐</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{areaName}</h4>
    </div>
    </div>
  );
};

export default RestaurentCard;
