const MenuItem = ({ data }) => {
  const { name, category, description, imageId } = data;

  return (
    <div className="menu-item-container">
      <div className="menu-content">
        <h3 className="res-name">{name}</h3>

        <p className="item-category">{category}</p>

        <p className="item-description">{description}</p>

        <button className="add-btn">ADD</button>
      </div>

      <div className="menu-img-container">
        <img
          className="menu-img"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            imageId
          }
          alt={name}
        />
      </div>
    </div>
  );
};

export default MenuItem;
