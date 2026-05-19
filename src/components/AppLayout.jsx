import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import FilterButton from "./FilterButton";
import { Outlet } from "react-router-dom";
import HotelListContext from "../../utils/HotelListContext";
import { useState } from "react";
const AppLayout = () => {
  const [hotelList, setHotelList] = useState([]);
  return (
    <div>
      <HotelListContext.Provider
        value={{
          hotelList,
          setHotelList,
        }}
      >
        <Header />
        <Outlet />
        <Footer />
      </HotelListContext.Provider>
    </div>
  );
};

export default AppLayout;
