import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import MenuItem from "./MenuItem";

const ResturantMenu = () => {
  const { resId } = useParams();
  const [menu, setMenu] = useState();

  useEffect(() => {
    async function MenuAPI() {
      const response = await fetch(
        `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.38430&lng=78.45830&restaurantId=${resId}`,
      );
      const json = await response.json();
      setMenu(
        json.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
          .itemCards,
      );
      // console.log(
      //   "testing if this works",
      //   json.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
      //     .itemCards,
      // );
    }
    MenuAPI();
  }, []);

  if (!menu) {
    return (
      <div>
        <Shimmer />
      </div>
    );
  }
  return (
    // <div className="nav-link-router">
    //   <h1> getting the resturant id through useparams {resId}</h1>
    // </div>
    <div>
      {menu.map((menuObj) => {
        return (
          <>
          <div className="dummy-for-margin"></div>
            <div>
              <MenuItem key={menuObj.card.info.id} data={menuObj.card.info} />;
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ResturantMenu;
