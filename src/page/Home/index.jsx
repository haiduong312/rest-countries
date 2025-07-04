import { useState, useEffect } from "react";
import Header from "../../layout/Components/Header";
import Search from "../../layout/Components/Search";
import FilterRegion from "../../layout/Components/FilterRegion";
import CountryList from "../../components/CountryList";
import data from "../../data.json";
function Home() {
    const [searchValue, setSearchValue] = useState("");
    const [region, setRegion] = useState("");
    const [filteredResult, setFilteredResult] = useState(data);

    useEffect(() => {
        const filtered = data.filter((country) => {
            const matchCountries = country.name.includes(searchValue);
            const matchRegion = region ? country.region === region : true;
            return matchCountries && matchRegion;
        });
        setFilteredResult(filtered || "nothing");
    }, [searchValue, region]);
    const handleSearchResult = (e) => setSearchValue(e);
    const handelChangeRegion = (e) => setRegion(e);
    return (
        <div className="">
            <Header />
            <div className="dark:bg-[hsl(207,26%,17%)] bg-white mt-[70px] min-h-[100vh]">
                <div className="container">
                    <div className="flex items-center justify-between">
                        <Search
                            value={searchValue}
                            onSearch={handleSearchResult}
                        />
                        <FilterRegion
                            value={region}
                            onChangeRegion={handelChangeRegion}
                        />
                    </div>
                    <div className="country-list">
                        <CountryList countries={filteredResult} />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;
