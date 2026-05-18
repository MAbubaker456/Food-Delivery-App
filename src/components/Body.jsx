// import { useEffect, useState } from "react";
// // import { resArr } from "../../utils/dummydata";
// import ResturantCard from "./ResturantCard";
// import FilterButton from "./FilterButton";
// import Shimmer from "./Shimmer";
// import { Link } from "react-router-dom";
// import { HotelContext } from "../../utils/HotelContext";

// const Body = () => {
//   // const [resArray, setResArr] = useState;
//   const [hotelList, setHotelList] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       // console.log(process.env.RES_API)

//       const response = await fetch(
//         "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=17.38430&lng=78.45830&carousel=true&third_party_vendor=1",
//       );

//       const json = await response.json();

//       // console.log("checking api", json); // this console is not working

//       if (json?.data.cards.length > 11) {
//         setHotelList(
//           json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
//             ?.restaurants,
//         );
//       } else {
//         setHotelList(
//           json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
//             ?.restaurants,
//         );
//       }
//     };
//     fetchData();
//   }, []);

//   if (!hotelList) {
//     return <Shimmer />;
//   }

//   return (
//     <>
//       <HotelContext.Provider value={{ hotelList, setHotelList }}>
//         <FilterButton resArray={hotelList} setResArray={setHotelList} />
//         {/* resArray={resArray} setResArray={setResArray} */}
//         <div className="cards">
//           {hotelList.map((hotelObj) => {
//             return (
//               <Link key={hotelObj.info.id} to={`/res/${hotelObj.info.id}`}>
//                 <ResturantCard
//                   key={hotelObj.info.id}
//                   hotelData={hotelObj.info}
//                 />
//               </Link>
//             );
//           })}
//         </div>
//       </HotelContext.Provider>
//     </>
//   );
// };

// export default Body;
import { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";
import FilterButton from "./FilterButton";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { HotelContext } from "../../utils/HotelContext";

const Body = () => {
  const [hotelList, setHotelList] = useState([]);
  const [originalList, setOriginalList] = useState([]); // ⬅️ preserve original
  const [isFiltered, setIsFiltered] = useState(false); // ⬅️ toggle state

  useEffect(() => {
    const fetchData = async () => {
      // const response = await fetch("https://corsproxy.io/?https://www.swiggy.com/...");
      const response = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=17.38430&lng=78.45830&carousel=true&third_party_vendor=1",
      );
      const json = await response.json();

      const data =
        json?.data.cards.length > 11
          ? json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants
          : json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;

      setHotelList(data);
      setOriginalList(data); // ⬅️ save a copy
    };
    fetchData();
  }, []);

  if (!hotelList) return <Shimmer />;

  return (
    <HotelContext.Provider
      value={{
        hotelList,
        setHotelList,
        originalList,
        isFiltered,
        setIsFiltered,
      }}
    >
      <FilterButton />
      <div className="cards">
        {hotelList.map((hotelObj) => (
          <Link key={hotelObj.info.id} to={`/res/${hotelObj.info.id}`}>
            <ResturantCard hotelData={hotelObj.info} />
          </Link>
        ))}
      </div>
    </HotelContext.Provider>
  );
};

export default Body;
