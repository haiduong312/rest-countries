function CountryCard({ country }) {
    return (
        <div className="country-card">
            <img src={country.flags.svg} alt="" width={"150px"} />
            <h3>{country.name}</h3>
            <p>Population: {country.population}</p>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital}</p>
        </div>
    );
}

export default CountryCard;
