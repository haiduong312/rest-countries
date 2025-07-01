import data from "../data.json";

export const search = (name = "") => {
    const keyword = name.toLowerCase();
    const result = data.filter((country) =>
        country.name.toLowerCase().includes(keyword)
    );
    return result || [];
};
