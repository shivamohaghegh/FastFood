import { useEffect, useState } from "react";
import axios from "axios";

const FetchCategoryList = () => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(
          "https://6844019c71eb5d1be032236c.mockapi.io/FoodCategory"
        );
        if (Array.isArray(res.data)) {
          setCategoryList(res.data);
        } else {
          console.warn("Unexpected data format:", res.data);
          setCategoryList([]);
        }
      } catch (err) {
        console.error("Failed to fetch category list:", err);
        setCategoryList([]);
      }
    };
    fetchCategories();
  }, []);

  return categoryList;
};

export default FetchCategoryList;
