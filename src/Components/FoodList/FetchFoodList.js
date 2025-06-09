import { useEffect, useState } from "react";
import { useCategory, useSearch, useSort } from "../Providers/AppProviders";

const FetchFoodList = () => {
  const [foodList, setFoodList] = useState([]);
  const { categoryValue } = useCategory();
  const { searchValue } = useSearch();
  const { sortValue } = useSort();

  useEffect(() => {
    let url = "https://6844019c71eb5d1be032236c.mockapi.io/FoodList";

    const params = new URLSearchParams();

    // Search
    if (searchValue) {
      params.append("search", searchValue);
    }

    // Category (ignore "All")
    if (categoryValue && categoryValue !== "All") {
      params.append("category", categoryValue);
    }

    // Sorting
    if (sortValue?.sortBy && sortValue?.order) {
      params.append("sortBy", sortValue.sortBy);
      params.append("order", sortValue.order);
    }

    const finalUrl = `${url}?${params.toString()}`;

    fetch(finalUrl)
      .then((res) => res.json())
      .then((json) => setFoodList(Array.isArray(json) ? json : []))
      .catch((err) => {
        console.error("Failed to fetch food list:", err);
        setFoodList([]);
      });
  }, [categoryValue, searchValue, sortValue]);

  return foodList;
};

export default FetchFoodList;
