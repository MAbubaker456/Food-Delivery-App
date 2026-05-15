import { useEffect, useState } from "react";
// import { resArr } from "../../utils/dummydata";
import ResturantCard from "./ResturantCard";
import FilterButton from "./FilterButton";
import Shimmer from "./Shimmer";

const Body = () => {
  // const [resArray, setResArr] = useState;
  const [hotelList, setHotelList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      // console.log(process.env.RES_API)

      const response = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=17.38430&lng=78.45830&carousel=true&third_party_vendor=1",
      );

      const json = await response.json();

      // console.log("checking api", json); // this console is not working

      if (json?.data.cards.length > 11) {
        setHotelList(
          json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants,
        );
      } else {
        setHotelList(
          json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants,
        );
      }
    };
    fetchData();
  }, []);

  if (!hotelList) {
    return <Shimmer />;
  }

  return (
    <>
      <FilterButton />
      {/* resArray={resArray} setResArray={setResArray} */}
      <div className="cards">
        {hotelList.map((hotelObj) => {
          return (
            <ResturantCard key={hotelObj.info.id} hotelData={hotelObj.info} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
