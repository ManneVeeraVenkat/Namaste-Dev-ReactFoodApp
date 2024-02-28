import { useDispatch } from "react-redux";
import { addItem } from "./utilis/cartSlice";

const ListItems = ({ items }) => {
  const dispatch = useDispatch();

  const HandleAddClick = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items &&
        items.map((item) => (
          <div
            key={item.card.info.id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
          >
            <div>
              <div className="py-2">
                <span className="font-bold text-lg">{item.card.info.name}</span>
                <span className="font-bold text-sm">
                  - ₹
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4">
              <div className="absolute">
                <button
                  className=" mx-8 rounded-md bg-black text-white shadow-md"
                  onClick={() => {
                    HandleAddClick(item);
                  }}
                >
                  Add+
                </button>
              </div>
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item.card.info.imageId}`}
                alt=""
              />
            </div>
          </div>
        ))}
    </div>
  );
};
export default ListItems;
