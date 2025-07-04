import { Link } from "react-router-dom";

function CountryCard({ country }) {
    return (
        <Link
            to={`/countrydetails/${country.alpha3Code}`}
            className="bg-[hsl(209,23%,22%)] rounded-md overflow-hidden shadow-md text-white"
        >
            <img
                src={country.flags.svg}
                alt=""
                className="w-full h-[170px] object-cover"
            />
            <div className="p-8">
                <h3>{country.name}</h3>
                <p>Population: {country.population}</p>
                <p>Region: {country.region}</p>
                <p>Capital: {country.capital}</p>
            </div>
        </Link>
    );
}

export default CountryCard;
