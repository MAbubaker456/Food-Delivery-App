const ShimmerMenu = () => {
  return (
    <div className="shimmer-menu-wrapper">
      {Array(6)
        .fill("")
        .map((_, index) => (
          <div className="shimmer-menu-card" key={index}>
            <div className="shimmer-menu-img"></div>

            <div className="shimmer-menu-content">
              <div className="shimmer-menu-title"></div>
              <div className="shimmer-menu-cuisine"></div>

              <div className="shimmer-menu-info">
                <div className="shimmer-menu-rating"></div>
                <div className="shimmer-menu-delivery"></div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ShimmerMenu;
