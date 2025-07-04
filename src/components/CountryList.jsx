import CountryCard from "./CountryCard";
function CountryList({ countries = [] }) {
    return (
        <div className="grid grid-cols-4 gap-[60px] row-span-1">
            {countries.map((country) => (
                <CountryCard key={country.alpha3Code} country={country} />
            ))}
        </div>
    );
}

export default CountryList;
