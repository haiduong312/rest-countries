import { Link } from "react-router-dom";

function CountryCard({ country }) {
    return (
        <Link
            to={`/countrydetails/${country.alpha3Code}`}
            className="dark:bg-[hsl(209,23%,22%)] bg-white rounded-md overflow-hidden shadow-md dark:text-white text-black "
        >
            <img
                src={country.flags.svg}
                alt=""
                className="w-full h-[170px] object-cover"
            />
            <div className="pt-8 pr-8 pl-8 pb-12">
                <h3 className="font-bold pb-4 text-3xl">{country.name}</h3>
                <p className="text-[15px]">Population: {country.population}</p>
                <p className="text-[15px]">Region: {country.region}</p>
                <p className="text-[15px]">Capital: {country.capital}</p>
            </div>
        </Link>
    );
}

export default CountryCard;
