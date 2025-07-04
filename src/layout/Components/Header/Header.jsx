import ChangeTheme from "../../../components/ChangeTheme";
import { Link } from "react-router-dom";
function Header() {
    return (
        <div className="fixed top-0 left-0 w-full h-[70px] dark:bg-[hsl(209,23%,22%)] bg-white">
            <div className="container flex items-center justify-between h-full">
                <Link
                    to={"/"}
                    className="text-black dark:text-white font-bold text-4xl"
                >
                    Where in the world?
                </Link>
                <ChangeTheme />
            </div>
        </div>
    );
}
export default Header;
