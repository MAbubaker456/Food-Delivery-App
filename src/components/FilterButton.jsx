import { useState } from "react";
import { resArr } from "../../utils/dummydata";

const FilterButton = (resArray, setResArray) => {
  return (
    <div className="button-container">
      <button
        className="filter-btn"
        onClick={() => {
          const filteredArray = resArray.filter((resData) => {
            return resData.avgRating >= 4.3;
          });
          setResArray(filteredArray);
        }}
      >
        Filter through rating
      </button>
    </div>
  );
};

export default FilterButton;
