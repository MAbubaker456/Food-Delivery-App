// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Shimmer from "./Shimmer";
// import MenuItem from "./MenuItem";
// import ShimmerMenu from "./ShimmerMenu";
// import RestaurnatCategory from "./ResturantCategory";

// const ResturantMenu = () => {
//   const { resId } = useParams();
//   const [menu, setMenu] = useState();

//   useEffect(() => {
//     async function MenuAPI() {
//       const response = await fetch(
//         `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.38430&lng=78.45830&restaurantId=${resId}`,
//       );
//       const json = await response.json();
//       setMenu(
//         json.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
//           .itemCards,
//       );

//       const categoriesArr =
//         json.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards.filter(
//           (category) => {
//             console.log(category.card.card["@type"]);
//             return (
//               category.card.card["@type"] ===
//               "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
//             );
//           },
//         );
//       // console.log(
//       //   "testing if this works",
//       //   json.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
//       //     .itemCards,
//       // );
//     }
//     MenuAPI();
//   }, []);

//   if (!menu) {
//     return (
//       <div>
//         <ShimmerMenu />
//       </div>
//     );
//   }
//   return (
//     // <div className="nav-link-router">
//     //   <h1> getting the resturant id through useparams {resId}</h1>
//     // </div>
//     // <div>
//     //   {menu.map((menuObj) => {
//     //     return (
//     //       <div key={menuObj.card.info.id}>
//     //         <div className="dummy-for-margin"></div>
//     //         <div>
//     //           <MenuItem key={menuObj.card.info.id} data={menuObj.card.info} />
//     //         </div>
//     //       </div>
//     //     );
//     //   })}
//     // </div>
//     return (
//        // <div className="nav-link-router">
//     //   <h1> getting the resturant id through useparams {resId}</h1>
//     // </div>
//     // <div>
//     //   {menu.map((menuObj) => {
//     //     return (
//     //       <div key={menuObj.card.info.id}>
//     //         <div className="dummy-for-margin"></div>
//     //         <div>
//     //           <MenuItem key={menuObj.card.info.id} data={menuObj.card.info} />
//     //         </div>
//     //       </div>
//     //     );
//     //   })}
//     // </div>

//   <div>
//     {categoriesArr.map((categoryObj) => {
//       return (
//         <RestaurnatCategory
//           key={categoryObj.card.card.categoryId}
//           category={categoryObj.card.card}
//         />
//       );
//     })}
//   </div>
// );

// export default ResturantMenu;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import MenuItem from "./MenuItem";
import ShimmerMenu from "./ShimmerMenu";
import RestaurnatCategory from "./ResturantCategory";

const ResturantMenu = () => {
  const { resId } = useParams();
  const [menu, setMenu] = useState();
  const [categoriesArr, setCategoriesArr] = useState([]); 

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

      const categories =
        json.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards.filter(
          (category) => {
            return (
              category.card.card["@type"] ===
              "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
            );
          },
        );

      setCategoriesArr(categories); 
    }
    MenuAPI();
  }, []);

  if (!menu) {
    return (
      <div>
        <ShimmerMenu />
      </div>
    );
  }

  return (
   
    <div>
      {categoriesArr.map((categoryObj) => (
        <RestaurnatCategory
          key={categoryObj.card.card.categoryId}
          category={categoryObj.card.card}
        />
      ))}
    </div>
  );
};

export default ResturantMenu;
