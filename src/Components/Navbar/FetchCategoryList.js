import { useEffect, useState } from "react";

const FetchCategoryList = () => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    fetch("https://6844019c71eb5d1be032236c.mockapi.io/FoodCategory")
      .then((res) => res.json())
      .then((json) => {
        if (Array.isArray(json)) {
          setCategoryList(json);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch category list:", err);
        setCategoryList([]);
      });
  }, []);

  return categoryList;
};

export default FetchCategoryList;
