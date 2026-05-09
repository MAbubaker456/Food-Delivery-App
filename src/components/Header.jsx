const Header = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/premium-vector/food-ordering-app-logo-with-points-fork-shapes-center_666184-195.jpg"
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
          <li className="list">home</li>
          <li className="list">about</li>
          <li className="list">contact us </li>
          <li className="list">cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
