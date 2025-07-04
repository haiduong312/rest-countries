import useTheme from "../hooks/useTheme";
function ChangeTheme() {
    const { theme, toggleTheme } = useTheme();
    return (
        <button
            onClick={toggleTheme}
            className="text-black dark:text-white font-semibold"
        >
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
    );
}
export default ChangeTheme;
