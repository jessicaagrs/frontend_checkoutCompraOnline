import { KeysStorage } from "../enums/enum";

export default function useLocalStorage() {
    const getLocalStorage = (key : KeysStorage) => {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    };

    const setLocalStorage = (data: any, key : KeysStorage) => {
        localStorage.setItem(key, JSON.stringify(data));
    };

    return { getLocalStorage, setLocalStorage };
}
