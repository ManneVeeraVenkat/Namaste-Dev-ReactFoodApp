/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import "../App.css";
import "../index.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnName, SetBtnName] = useState("Login");

  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="justify-between">
      <div className="flex justify-between bg-green-100 shadow-lg">
        <Link to="/">
          <div className="logo-container">
            <img
              className="w-24"
              src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
            />
          </div>
        </Link>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4">
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li className="px-4">
              <Link className="link" to="/about">
                About Us
              </Link>
            </li>
            <li className="px-4">
              <Link className="link" to="/contact">
                Contact Us
              </Link>
            </li>
            <Link className="link" to="/cart">
              <li className="px-4 font-bold">
                Cart ({cartItems.length} items)
              </li>
            </Link>
            <button
              onClick={() => {
                btnName === "Login"
                  ? SetBtnName("Logout")
                  : SetBtnName("Login");
              }}
              className="button"
            >
              {btnName}
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
