// import { useState } from "react";
// import { resArr } from "../../utils/dummydata";

// const FilterButton = ({resArray, setResArray}) => {
//   return (
//     <div className="button-container">
//       <button
//         className="filter-btn"
//         onClick={() => {
//           const filteredArray = resArray.filter((resData) => {
//             return resData.avgRating >= 4.3;
//           });
//           setResArray(filteredArray);
//         }}
//       >
//         Filter through rating
//       </button>
//     </div>
//   );
// };

// export default FilterButton;

// import { useHotelContext } from "../../utils/HotelContext"; // ⬅️ import

// const FilterButton = () => {
//   const { hotelList, setHotelList } = useHotelContext(); // ⬅️ no props needed

//   return (
//     <div className="button-container">
//       <button
//         className="filter-btn"
//         onClick={() => {
//           const filteredArray = hotelList.filter(
//             (resData) => resData.avgRating >= 4.0,
//           );
//           setHotelList(filteredArray);
//         }}
//       >
//         Filter through rating
//       </button>
//     </div>
//   );
// };

// export default FilterButton;

import { useHotelContext } from "../../utils/HotelContext";

const FilterButton = () => {
  const { hotelList, setHotelList, originalList, isFiltered, setIsFiltered } = useHotelContext();

  const handleFilter = () => {
    if (isFiltered) {
      // ⬅️ Second click: restore original list
      setHotelList(originalList);
      setIsFiltered(false);
    } else {
      // ⬅️ First click: filter by rating
      const filteredArray = originalList.filter((resData) => resData.info.avgRating >= 4.3);
      setHotelList(filteredArray);
      setIsFiltered(true);
    }
  };

  return (
    <div className="button-container">
      <button className="filter-btn" onClick={handleFilter}>
        {isFiltered ? "Show All Restaurants" : "Filter Through Rating"} {/* ⬅️ conditional text */}
      </button>
    </div>
  );
};

export default FilterButton;