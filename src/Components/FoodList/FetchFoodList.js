import { useEffect, useState } from "react";
import { useCategory } from "../Context/CategoryContext";

const FetchFoodList = () => {
  const [foodList, setFoodList] = useState([]);
  const { value: categoryName } = useCategory("All");

  useEffect(() => {
    const url =
      categoryName === "All"
        ? `https://6844019c71eb5d1be032236c.mockapi.io/FoodList`
        : `https://6844019c71eb5d1be032236c.mockapi.io/FoodList?category=${categoryName}`;
    fetch(url)
      .then((res) => res.json())
      .then((json) => setFoodList(Array.isArray(json) ? json : []));
  }, [categoryName]);

  return foodList;
};

export default FetchFoodList;
