import Loading from "../Loading/Loading";
import FetchFoodList from "./FetchFoodList";
import FoodCard from "./FoodCard";

const FoodList = () => {
  const foodList = FetchFoodList();

  if (foodList.length === 0) {
    return <Loading />;
  }

  return (
    <div className="container">
      <div className="mx-3 my-5">
        <FoodCard foodList={foodList} />
      </div>
    </div>
  );
};

export default FoodList;
