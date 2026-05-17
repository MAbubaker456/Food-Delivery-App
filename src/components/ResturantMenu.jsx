import { useParams } from "react-router-dom";

const ResturantMenu = () => {
  const { resId } = useParams();
  return (
    <div className="nav-link-router">
      <h1> getting the resturant id through useparams {resId}</h1>
    </div>
  );
};

export default ResturantMenu;
