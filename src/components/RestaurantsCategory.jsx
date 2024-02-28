import ListItems from "./ListItems";

const RestaurantsCategory = ({ data, showItems, setShowIndex }) => {
  // const [showItems, setShowItems] = useState(false);
  const HandleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      {/* header */}
      <div className="w-6/12 mx-auto my-4 shadow-orange-300 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={HandleClick}
        >
          <span className="font-bold text-lg">
            {data.title}({data.itemCards.length})
          </span>
          <span>
            <svg
              data-accordion-icon
              className="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </span>
        </div>
        {showItems && <ListItems items={data.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantsCategory;
