import ChangeTheme from "../../../components/ChangeTheme";
function Header() {
    return (
        <div className="fixed top-0 left-0 w-full h-[70px] dark:bg-[hsl(209,23%,22%)] bg-white">
            <div className="container flex items-center justify-between h-full">
                <h1 className="text-black dark:text-white font-bold text-4xl">
                    Where in the world?
                </h1>
                <ChangeTheme />
            </div>
        </div>
    );
}
export default Header;
