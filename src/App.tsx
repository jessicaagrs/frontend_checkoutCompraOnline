import { useEffect } from "react";
import CheckoutBox from "./components/checkout/CheckoutBox";
import { InformationBox } from "./components/checkout/desktop/InformationBox";
import { CheckoutContextProvider } from "./contexts/checkoutContext";
import useLocalStorage from "./hooks/useLocalStorage";
import PRODUCTS from "./data/products";

function App() {
    const { setLocalStorage } = useLocalStorage();

    useEffect(() => {
        setLocalStorage(PRODUCTS);
    }, []);

    return (
        <CheckoutContextProvider>
            <main className="w-full h-screen flex">
                <InformationBox />
                <CheckoutBox />
            </main>
        </CheckoutContextProvider>
    );
}

export default App;
