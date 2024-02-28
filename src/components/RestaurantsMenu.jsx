/* eslint-disable array-callback-return */
/* eslint-disable no-undef */
/* eslint-disable no-lone-blocks */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantsCategory from "./RestaurantsCategory";

const RestaurantsMenu = () => {
  const [resInfo, setRestInfo] = useState(null);
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState();
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const jsonData = await data.json();
    // jsonData?.data?.cards[2]?.card?.card?.info;
    setRestInfo(jsonData);
  };
  const {
    name,
    cuisines,
    costForTwoMessage,
    totalRatingsString,
    lastMileTravelString,
    areaName,
    feeDetails,
    avgRatingString,
  } = resInfo?.data?.cards[2]?.card?.card?.info || {};
  //   const{itemsCard}=jsonData

  // getting errors while acceing the itemcards const { itemsCards } =
  //   resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
  //     ?.card || {};

  // console.log(
  //   resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
  //     ?.card
  // );

  const itemsInfo =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
      (item) => ({
        name: item.card.info.name,
        category: item.card.info.category,
        description: item.card.info.description,
        price: item.card.info.price,
        imageId: item.card.info.imageId,
      })
    ) || [];
  const categories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="res-menu">
      <h1 className="text-center mt-4 font-bold text-xl text-blue-600">
        {resInfo && name}
      </h1>

      <article className="flex items-start space-x-6 p-6  border-1px border-solid-black">
        <div className="min-w-0 relative flex-auto">
          <h2 className="font-bold text-gray-800 truncate pr-20">
            {resInfo && name}
          </h2>
          <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
            <div className="absolute top-0 right-0 flex items-center space-x-1">
              <dt className="text-sky-500">
                <span className="sr-only">Star rating</span>
                <svg width="16" height="20" fill="currentColor">
                  <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                </svg>
              </dt>
              <dd className="text-gray-500">{avgRatingString}</dd>
            </div>
            <div className="px-2 rounded-lg border border-gray-200">
              <dt className="sr-only">Cusines</dt>
              <dd className="text-sm">{cuisines ? cuisines.join(", ") : ""}</dd>
            </div>
            <div className="ml-2">
              <dt className="sr-only">AreaName</dt>
              <dd>{areaName}</dd>
            </div>
          </dl>
          <div className="flex items-center">
            <dt className="sr-only">Message</dt>
            <dd>{feeDetails?.message}</dd>
          </div>
        </div>
      </article>
      {/* accordine way */}
      <div>
        {categories &&
          categories.map((category, index) => (
            <RestaurantsCategory
              key={index}
              data={category.card?.card}
              showItems={index === showIndex ? true : false}
              setShowIndex={() => setShowIndex(index)}
            />
          ))}
      </div>

      {
        // normal way
        /* <div>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {itemsInfo.map((item, index) => (
            <li key={index} className="rounded-lg border border-gray-200 p-4">
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <img
                className="rounded-md mt-2 w-full"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item.imageId}`}
                alt=""
              />
              <p className="text-lg text-gray-600 mt-2 ">
                Price: Rs {item.price / 100}
              </p>
              <p>{item.category}</p>
              <p className="text-sm">{item.description}</p>
            </li>
          ))}
        </ul>
      </div> */
      }
    </div>
  );
};
export default RestaurantsMenu;

{
  /* <article className="flex items-start space-x-6 p-6">
     
      <div className="min-w-0 relative flex-auto">
        <h2 className="font-semibold text-slate-900 truncate pr-20">{resInfo && <h1>{name}</h1>}</h2>
        <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
          <div className="absolute top-0 right-0 flex items-center space-x-1">
            <dt className="text-sky-500">
              <span className="sr-only">Star rating</span>
              <svg width="16" height="20" fill="currentColor">
                <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
              </svg>
            </dt>
            <dd>{avgRatingString}</dd>
          </div>
          <div>
            <dt className="sr-only">Rating</dt>
            <dd className="px-1.5 ring-1 ring-slate-200 rounded">{cuisines}</dd>
          </div>
          <div className="ml-2">
            <dt className="sr-only">Year</dt>
            <dd>{areaName}</dd>
          </div>
          <div>
            <dt className="sr-only">Genre</dt>
            <dd className="flex items-center">
          
              {lastMileTravelString}
            </dd>
          </div>
        </dl>
      </div>
    </article>
  ) */
}
