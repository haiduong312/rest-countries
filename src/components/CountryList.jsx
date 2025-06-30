import CountryCard from "./CountryCard";
function CountryList({ countries }) {
    return (
        <div className="country-list">
            {countries.map((country) => (
                <CountryCard country={country} key={country.cioc}></CountryCard>
            ))}
        </div>
    );
}
export default CountryList;
