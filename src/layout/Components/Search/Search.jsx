function Search({ value, onSearch }) {
    const handleSearchResult = (e) => {
        onSearch(e.target.value);
    };
    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={handleSearchResult}
                placeholder="Search for a country..."
            />
        </div>
    );
}
export default Search;
