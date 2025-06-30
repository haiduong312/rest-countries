import React from "react";
import { useState } from "react";
function Search() {
    const [searchValue, setSearchValue] = useState("");
    return (
        <div>
            <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <button type="submit">Search</button>
        </div>
    );
}
export default Search;
