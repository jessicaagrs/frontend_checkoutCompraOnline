export default function useLocalStorage() {
    const getLocalStorage = () => {
        const data = localStorage.getItem("checkout");
        return data ? JSON.parse(data) : null;
    };

    const setLocalStorage = (data: any) => {
        localStorage.setItem("checkout", JSON.stringify(data));
    };

    return { getLocalStorage, setLocalStorage };
}
