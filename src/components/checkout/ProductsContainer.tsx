import { useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

export default function ProductsContainer() {
    const { getLocalStorage } = useLocalStorage();

    useEffect(() => {
        const data = getLocalStorage();
        console.log(data);
    }, []);

    return <div></div>;
}
