import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../../layout/Components/Header";
import data from "../../data.json";
function CountryDetails() {
    let params = useParams();
    let key = params.code;
    const country = data.find((country) => country.alpha3Code === key);
    const countryLanguage = country.languages
        .map((language) => language.name)
        .join(", ");
    return (
        <>
            <Header />
            <div>
                <Link to={"/"}>
                    <button>Back</button>
                </Link>
                <div className="content">
                    <img src={country.flags.svg} alt="" width={"200px"} />
                    <div className="info">
                        <h1>{country.name}</h1>
                        <div className="country-info">
                            <p>Native name: {country.nativeName}</p>
                            <p>Population: {country.population}</p>
                            <p>Region: {country.region}</p>
                            <p>Sub Region: {country.subregion}</p>
                            <p>Capital: {country.capital}</p>
                        </div>
                        <div className="other-info">
                            <p>Top Level Domain: {country.topLevelDomain}</p>
                            <p>Currencies: {country.currencies.name}</p>
                            <p>Languages: {countryLanguage}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default CountryDetails;
