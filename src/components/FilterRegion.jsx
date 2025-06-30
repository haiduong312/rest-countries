import React from "react";
const changeValue = ["", "Africa", "America", "Asia", "Europe", "Oceania"];

function FilterRegion({ region, onChange }) {
    return (
        <select value={region} onChange={(e) => onChange(e.target.value)}>
            {changeValue.map((value) => {
                <option key={value || "all"} value={value}>
                    {value === "" ? "All regions" : value}
                </option>;
            })}
        </select>
    );
}
export default FilterRegion;
