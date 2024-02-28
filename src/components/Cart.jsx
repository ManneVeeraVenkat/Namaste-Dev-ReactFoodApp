import { useDispatch, useSelector } from "react-redux";
import ListItems from "./ListItems";
import { clearCart } from "./utilis/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const HandleClearEvent = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        {cartItems.length === 0 && (
          <h1>Cart is empty please add items to procced</h1>
        )}
        {cartItems.length > 0 && (
          <>
            <ListItems items={cartItems} />
            <button
              className="p-2 m-2 bg-black text-white rounded-lg"
              onClick={HandleClearEvent}
            >
              Clear Cart
            </button>
          </>
        )}
      </div>
    </div>
  );
};
export default Cart;
