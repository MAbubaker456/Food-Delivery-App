import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div className="nav-link-router">
      <h1>Welcome to food delivery application</h1>

      <div className="front-page-container">
        <Link className="link-tag" to={"/res"}>
          <div className="front-page-element">
            <h1>Restaurants</h1>
          </div>
        </Link>

        <Link className="link-tag" to={"/grocery"}>
          <div className="front-page-element">
            <h1>Grocery</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;
