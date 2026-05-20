import MenuItem from "./MenuItem";

const RestaurnatCategory = ({ category }) => {
  const { title, itemCards } = category;

  return (
    <div>
      <div className="menu-title-container">
        <p className="menu-title">
          {title} ({itemCards.length})
        </p>

        <p>⬇️</p>
      </div>
      {itemCards.map((menuItem) => {
        return (
          <MenuItem key={menuItem.card.info.id} data={menuItem.card.info} />
        );
      })}
    </div>
  );
};

export default RestaurnatCategory;
