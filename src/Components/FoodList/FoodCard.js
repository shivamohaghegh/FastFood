const FoodCard = ({ foodList }) => {
  return (
    <div className="row g-3">
      {foodList?.map((foodItem) => (
        <div className="col-md-3" key={foodItem.id}>
          <div className="card food-card">
            <div>
              <img
                src={foodItem.image}
                className="card-img-top"
                alt={foodItem.name}
              />
              <div className="position-absolute top-50 end-0 m-2">
                <span className="badge text-bg-warning">
                  Price : {foodItem.price}$
                </span>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title">{foodItem.name}</h5>
              <p className="card-text">{foodItem.ingredients.join(", ")}</p>
              <button className="btn btn-outline-warning btn-sm">Order</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodCard;
