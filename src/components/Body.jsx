import { resArr } from "../../utils/dummydata";
import ResturantCard from "./ResturantCard";
const Body = () => {
  return (
    <div className="cards">
      {resArr.map((hotelObj) => {
        return <ResturantCard key={hotelObj.id} hotelData={hotelObj} />;
      })}
    </div>
  );
};

export default Body;
