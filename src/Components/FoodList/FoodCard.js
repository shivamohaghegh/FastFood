const FoodCard = ({ foodList }) => {
  return (
    <div className="row g-3">
      {foodList?.map((foodItem) => (
        <div className="col-md-3" key={foodItem.id}>
          <div className="card food-card">
            <img
              src={foodItem.image}
              className="card-img-top"
              alt={foodItem.name}
            />
            <div className="card-body">
              <h5 className="card-title">{foodItem.name}</h5>
              <p className="card-text">{foodItem.ingredients}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodCard;
