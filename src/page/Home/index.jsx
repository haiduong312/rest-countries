import CountryList from "../../components/CountryList";
import FilterRegion from "../../components/FilterRegion";
import Search from "../../components/Search";
function Home() {
    return (
        <>
            <div className="header">
                <h1 className="title">Where in the world?</h1>
                <button className="theme">Dark Theme</button>
            </div>
            <div className="content">
                <div className="search-bar">
                    <Search />
                    <FilterRegion />
                </div>
                <CountryList />
            </div>
        </>
    );
}
export default Home;
