import { useState } from "react";
import { Link } from "react-router-dom";
// import useIsOnline from "../../utils/useIsOnline";
import { useContext } from "react";
import HotelListContext from "../../utils/HotelListContext";

const Header = () => {
  const [isLogin, SetIsLogin] = useState(false);
  // const isOnline = useIsOnline();
  const { hotelList, setHotelList } = useContext(HotelListContext);
  // trying to see of context works in header so consoling context element
  // console.log("hotel list from header component", hotelList);
  const [input, setInput] = useState("");

  return (
    <div className="nav-container">
      <div className="logo-container">
        <img
          className="logo"
          src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-food-delivery-logo-design-png-image_5392526.jpg"
          alt="this is logo"
        />
      </div>
      <div className="search-bar">
        <input
          value={input}
          className="search-ip"
          type="text"
          placeholder="Search For Resturants"
          onChange={(e) => {
            setInput(e.target.value);
            const filteredList = hotelList.filter((hotelobj) => {
              return hotelobj.info.name
                .toLowerCase()
                .includes(input.toLowerCase());
            });
            setHotelList(filteredList);
          }}
        />
      </div>
      <div className="nav-links">
        <ul className="list-item-container">
          {/* {isOnline ? (
            <li className="list">🟢 Online</li>
          ) : (
            <li className="list">🛑 Offline</li>
          )} */}
          <li className="list">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={"/res"}
            >
              Home
            </Link>
          </li>
          <li className="list">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={"/aboutus"}
            >
              About
            </Link>
          </li>
          <li className="list">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={"/contactus"}
            >
              Contact Us
            </Link>
          </li>
          <li className="list">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={"/cart"}
            >
              Cart
            </Link>
          </li>
          {isLogin ? (
            <li
              className="list"
              onClick={() => {
                SetIsLogin(!isLogin);
              }}
            >
              Logout
            </li>
          ) : (
            <li
              className="list"
              onClick={() => {
                SetIsLogin(!isLogin);
              }}
            >
              {" "}
              Sign in
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
