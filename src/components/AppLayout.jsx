import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import FilterButton from "./FilterButton";
import { Outlet } from "react-router-dom";
import HotelListContext from "../../utils/HotelListContext";
const AppLayout = () => {
  return (
    <div>
      {/* <HotelListContext.Provider
        value={{
          hotelList,
          setHotelList,
        }}
      > */}
      <Header />
      <Outlet />
      <Footer />
      {/* </HotelListContext.Provider> */}
    </div>
  );
};

export default AppLayout;
