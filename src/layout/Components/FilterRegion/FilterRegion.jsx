function FilterRegion({ value, onChangeRegion }) {
    const handleChangeRegion = (e) => {
        onChangeRegion(e.target.value);
    };
    return (
        <>
            <select
                value={value}
                onChange={handleChangeRegion}
                className="dark:bg-[hsl(209,23%,22%)] bg-white h-[50px] dark:text-[hsl(0,100%,100%)] shadow text-black p-5 outline-none rounded-md"
            >
                <option value="">Filter By Region</option>
                <option value="Africa">Africa</option>
                <option value="Asia">Asia</option>
                <option value="Americas">Americas</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </>
    );
}
export default FilterRegion;
