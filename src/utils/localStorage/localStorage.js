export const getLocalStorage = (name) => {
    const stringData = JSON.parse(localStorage.getItem(name));
    return stringData ? stringData : [];
};

export const setLocalStorage = (name, data) => {
    localStorage.setItem(name, JSON.stringify(data));
};