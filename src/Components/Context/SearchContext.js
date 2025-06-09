import { useContext, createContext, useState } from "react";

const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

export const SearchyProvider = ({ children }) => {
  const [value, setValue] = useState("");

  return (
    <SearchContext.Provider value={{ value, setValue }}>
      {children}
    </SearchContext.Provider>
  );
};
