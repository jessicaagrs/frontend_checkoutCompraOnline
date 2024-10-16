import { useEffect } from "react";
import CheckoutBox from "./components/checkout/CheckoutBox";
import { InformationBox } from "./components/checkout/desktop/InformationBox";
import { CheckoutContextProvider } from "./contexts/checkoutContext";
import PRODUCTS from "./data/products";
import { KeysStorage } from "./enums/enum";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
    const { setLocalStorage, clearLocalStorage } = useLocalStorage();

    useEffect(() => {
        setLocalStorage(PRODUCTS, KeysStorage.PRODUCTS);
        clearLocalStorage(KeysStorage.BUY);
    }, []);

    return (
        <CheckoutContextProvider>
            <main className="w-full min-h-screen flex">
                <InformationBox />
                <CheckoutBox />
            </main>
        </CheckoutContextProvider>
    );
}

export default App;
