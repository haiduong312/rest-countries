import CountryCard from "./CountryCard";
function CountryList({ countries = [] }) {
    return (
        <div className="country-list">
            {countries.map((country) => (
                <CountryCard key={country.alpha3Code} country={country} />
            ))}
        </div>
    );
}

export default CountryList;
