import { useContext, createContext, useState } from "react";

const CategoryContext = createContext();

export const useCategory = () => useContext(CategoryContext);

export const CategoryProvider = ({ children }) => {
    const [value, setValue] = useState("");

    return (
        <CategoryContext.Provider value={{ value, setValue }}>
            {children}
        </CategoryContext.Provider>
    )

}