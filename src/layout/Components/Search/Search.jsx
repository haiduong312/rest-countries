import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Search({ value, onSearch }) {
    const handleSearchResult = (e) => {
        onSearch(e.target.value);
    };
    return (
        <div className="flex items-center justify-center dark:bg-[hsl(209,23%,22%)] bg-white shadow h-[50px] w-[500px] pt-6 pl-6 pb-6 rounded-md">
            <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-black dark:text-white pr-[10px]"
            />
            <input
                type="text"
                value={value}
                onChange={handleSearchResult}
                placeholder="Search for a country..."
                className="bg-transparent flex-grow outline-none dark:text-white dark:placeholder-white text-black placeholder-black"
            />
        </div>
    );
}
export default Search;
