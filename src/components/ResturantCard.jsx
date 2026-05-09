const ResturantCard = ({ hotelData }) => {
  const {
    resName,
    cuisine,
    avgRating,
    deliveryTime,
    costForTwo,
    imgId,
    location,
  } = hotelData;

  return (
    <div className="main-res-container">
      <div className="resturantCard">
        <div className="res-img-container">
          <img
            className="res-img"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              imgId
            }
            alt="resturant image"
          />
        </div>
        <div className="res-details">
          <p className="res-name">{resName}</p>
          <p className="res-item">{cuisine.join(" ,")} </p>
          <p className="res-item">ratings : {avgRating} ⭐</p>
          <p className="res-item">cost: {costForTwo}</p>
        </div>
      </div>
    </div>
  );
};

export default ResturantCard;
