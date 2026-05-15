import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLogin, SetIsLogin] = useState(false);
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
          className="search-ip"
          type="text"
          placeholder="search for food"
        />
      </div>
      <div className="nav-links">
        <ul className="list-item-container">
          <li className="list">
            <Link to={"/res"}>Home</Link>
          </li>
          <li className="list">
            <Link to={"/aboutus"}>About</Link>
          </li>
          <li className="list">Contact Us </li>
          <li className="list">Cart</li>
          {isLogin ? (
            <li
              className="list"
              onClick={() => {
                SetIsLogin(!isLogin);
              }}
            >
              {" "}
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
