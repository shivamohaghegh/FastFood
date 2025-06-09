import { useContext, createContext, useState } from "react";

// --- Category Context ---
const CategoryContext = createContext();
export const useCategory = () => useContext(CategoryContext);

// --- Search Context ---
const SearchContext = createContext();
export const useSearch = () => useContext(SearchContext);

// --- Sort Context ---
const SortContext = createContext();
export const useSort = () => useContext(SortContext);

// --- Combined Provider ---
export const AppProviders = ({ children }) => {
  const [categoryValue, setCategoryValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [sortValue, setSortValue] = useState({ sortBy: "", order: "" });

  return (
    <CategoryContext.Provider value={{ categoryValue, setCategoryValue }}>
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <SortContext.Provider value={{ sortValue, setSortValue }}>
          {children}
        </SortContext.Provider>
      </SearchContext.Provider>
    </CategoryContext.Provider>
  );
};
