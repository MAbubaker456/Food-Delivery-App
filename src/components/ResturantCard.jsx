const ResturantCard = ({ hotelData }) => {
  const {
    name,
    cuisines,
    avgRating,
    sla, //deliveryTime
    costForTwo,
    cloudinaryImageId,
    locality,
  } = hotelData;

  return (
    <div className="main-res-container">
      <div className="resturantCard">
        <div className="res-img-container">
          <img
            className="res-img"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              cloudinaryImageId
            }
            alt="resturant image"
          />
        </div>
        <div className="res-details">
          <p className="res-name">{name}</p>
          <p className="res-item">{cuisines.join(" ,")} </p>
          <p className="res-item">ratings : {avgRating} ⭐</p>
          <p className="res-item">cost: {costForTwo}</p>
          <p className="res-item">location: {locality}</p>
          <p className="res-item">deliveryTime :{sla.deliveryTime}</p>
        </div>
      </div>
    </div>
  );
};

export default ResturantCard;
