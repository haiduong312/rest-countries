import React, { useEffect, useState } from "react";
import * as searchService from "../service/searchService";
import CountryList from "./CountryList";
import data from "../data.json";
function Search() {
    const [searchValue, setSearchValue] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        const fetchData = () => {
            const result = searchService.search(searchValue || "");
            setSearchResult(result);
        };
        fetchData();
    }, [searchValue]);
    const handleSearchValue = (e) => {
        const searchValue = e.target.value;
        setSearchValue(searchValue);
    };
    return (
        <div>
            <input
                type="text"
                value={searchValue}
                onChange={handleSearchValue}
                placeholder="Search for a country..."
            />
            <CountryList countries={searchResult || data} />
        </div>
    );
}
export default Search;
