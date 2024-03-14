/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */

import { useEffect, useState } from "react";
import Res_Card from "./Res_Card";
import { Link } from "react-router-dom";

/* eslint-disable react/jsx-pascal-case */
const Body = () => {
  const [listOfRestraunts, setListRestraunts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredListOfRestraunts, setFilteredListOfRestraunts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const list = await data.json();
    setListRestraunts(
      list?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredListOfRestraunts(
      list?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const searchRestaruent = (e) => {
    let searchtext = e.target.value.toLowerCase();
    setSearchText(searchtext);

    const fillterRestraunts = listOfRestraunts.filter((res) =>
      res.info.name.toLowerCase().includes(searchtext)
    );
    setFilteredListOfRestraunts(fillterRestraunts);
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="m-2 p-4 mx-auto text-center relative">
          <input
            type="text"
            className="border border-solid border-gray-500 border-r-2 p-3 h-12 w-80 rounded-lg"
            value={searchText}
            onChange={searchRestaruent}
            placeholder="Search restaurants..."
          />
          {searchText && (
            <ul className="autocomplete-list absolute top-full left-4 bg-white border border-gray-300 shadow-md w-80 rounded-lg -mt-4">
              {filteredListOfRestraunts.map((restaurant, index) => (
                <li
                  key={`${restaurant.id}-${index}`}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {restaurant.info.name}
                </li>
              ))}
            </ul>
          )}
          {/* <button
              className="search-button"
              onClick={() => {
                const fillterRestraunts = listOfRestraunts.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredListOfRestraunts(fillterRestraunts);
              }}
            > */}
          {/* Search
            </button> */}
        </div>
      </div>
      <div className="flex flex-wrap  justify-center">
        {filteredListOfRestraunts.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <Res_Card resData={restaurant} />
          </Link>
        ))}
      </div>
    </>
  );
};
export default Body;
