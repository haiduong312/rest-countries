import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Search({ value, onSearch }) {
    const handleSearchResult = (e) => {
        onSearch(e.target.value);
    };
    return (
        <div className="flex items-center justify-center bg-[hsl(209,23%,22%)] h-[50px] w-[500px] pt-6 pl-6 pb-6 rounded-md">
            <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={{ color: "#fff", paddingRight: "10px" }}
            />
            <input
                type="text"
                value={value}
                onChange={handleSearchResult}
                placeholder="Search for a country..."
                className="bg-transparent flex-grow outline-none text-white placeholder-white"
            />
        </div>
    );
}
export default Search;
