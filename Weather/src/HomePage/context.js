import { createContext, useState } from "react";

export const SearchContext = createContext();
export const SearchContextProvider = ({ children }) => {
    const [searchedCities, setSearchedCities] = useState([]);

    const value = {
        searchedCities,
        setSearchedCities,
    };

    return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
};
