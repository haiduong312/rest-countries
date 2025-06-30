import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import CountryDetails from "./page/CountryDetails";
function App() {
    return (
        <Router>
            <div className="apps">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/countrydetails"
                        element={<CountryDetails />}
                    />
                </Routes>
            </div>
        </Router>
    );
}
export default App;
