import { useParams, Link } from "react-router-dom";
import Header from "../../layout/Components/Header";
import data from "../../data.json";

function CountryDetails() {
    let params = useParams();
    let key = params.code;
    const country = data.find((country) => country.alpha3Code === key);

    const countryLanguage = country.languages
        .map((lang) => lang.name)
        .join(", ");
    const currencies = country.currencies?.map((c) => c.name).join(", ");
    const borders = country.borders || [];

    return (
        <>
            <Header />
            <div className="pt-[70px] min-h-screen dark:bg-[hsl(207,26%,17%)] bg-white text-black dark:text-white">
                <div className="container mx-auto px-6 py-10">
                    <Link to={"/"}>
                        <button className="flex items-center gap-2 px-6 py-2 bg-white dark:bg-[hsl(209,23%,22%)] dark:text-white text-black rounded-lg shadow-xl hover:brightness-110">
                            ← Back
                        </button>
                    </Link>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-40 items-center">
                        <img
                            src={country.flags.svg}
                            alt={country.name}
                            className="w-full max-w-full object-contain shadow-lg"
                        />

                        <div>
                            <h1 className="text-5xl font-bold mb-8">
                                {country.name}
                            </h1>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xl">
                                <div className="space-y-3">
                                    <p>
                                        <strong>Native Name:</strong>{" "}
                                        {country.nativeName}
                                    </p>
                                    <p>
                                        <strong>Population:</strong>{" "}
                                        {country.population.toLocaleString()}
                                    </p>
                                    <p>
                                        <strong>Region:</strong>{" "}
                                        {country.region}
                                    </p>
                                    <p>
                                        <strong>Sub Region:</strong>{" "}
                                        {country.subregion}
                                    </p>
                                    <p>
                                        <strong>Capital:</strong>{" "}
                                        {country.capital}
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <p>
                                        <strong>Top Level Domain:</strong>{" "}
                                        {country.topLevelDomain.join(", ")}
                                    </p>
                                    <p>
                                        <strong>Currencies:</strong>{" "}
                                        {currencies}
                                    </p>
                                    <p>
                                        <strong>Languages:</strong>{" "}
                                        {countryLanguage}
                                    </p>
                                </div>
                            </div>

                            {borders.length > 0 && (
                                <div className="mt-10 flex flex-col md:flex-row md:items-center gap-4">
                                    <span className="font-semibold text-xl">
                                        Border Countries:
                                    </span>
                                    <div className="flex flex-wrap gap-3">
                                        {borders.map((border) => (
                                            <span
                                                key={border}
                                                className="px-4 py-1 bg-white dark:bg-[hsl(209,23%,22%)] rounded shadow text-sm"
                                            >
                                                {border}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CountryDetails;
