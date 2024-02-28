import "../App.css";
import { FaStar, FaClock } from "react-icons/fa";

const Res_Card = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div className="res-card m-3 p-4 w-64 h-[410px] rounded-lg bg-gray-100 hover:bg-gray-300">
      <img
        className="res-logo rounded-md w-full h-32 object-cover"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt={name}
      />
      <div className="res-details-container">
        <div className="res-name font-bold py-2 text-lg">{name}</div>
        <div className="res-info">
          <div className="res-rating flex items-center py-1 ">
            <FaStar color="green" /> Rating: {avgRating}
          </div>
          <div className="res-delivery-time flex items-center py-1">
            <FaClock /> Delivery Time: {sla?.deliveryTime} mins
          </div>
          <div className="res-cuisines text-sm">{cuisines.join(", ")}</div>
          <div className="res-cost">Cost for Two: {costForTwo}</div>
        </div>
      </div>
    </div>
  );
};

export default Res_Card;
