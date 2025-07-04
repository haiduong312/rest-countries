function FilterRegion({ value, onChangeRegion }) {
    const handleChangeRegion = (e) => {
        onChangeRegion(e.target.value);
    };
    return (
        <>
            <select value={value} onChange={handleChangeRegion}>
                <option value="">Filter By Region</option>
                <option value="Africa">Africa</option>
                <option value="Asia">Asia</option>
                <option value="America">America</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </>
    );
}
export default FilterRegion;
