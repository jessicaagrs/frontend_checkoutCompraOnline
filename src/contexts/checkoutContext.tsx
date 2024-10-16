import { createContext, useEffect, useState } from "react";
import { TypeCheckout } from "../enums/enum";
import PRODUCTS from "../data/products";

export const CheckoutContext = createContext({
    typeCheckout: "",
    totalItems: 0,
    setTypeCheckout: (value: TypeCheckout) => {},
    setTotalItems: (value: number) => {},
});

interface ProviderProps {
    children: React.ReactNode;
}

export function CheckoutContextProvider({ children }: ProviderProps) {
    const [typeCheckout, setTypeCheckout] = useState(TypeCheckout.BAG);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        const totalInitialItems = PRODUCTS.reduce((acc, item) => acc + item.quantity, 0);

        if (totalInitialItems) {
            setTotalItems(totalInitialItems);
        }
    }, [totalItems]);

    return (
        <CheckoutContext.Provider
            value={{
                typeCheckout,
                setTypeCheckout,
                totalItems,
                setTotalItems,
            }}
        >
            {children}
        </CheckoutContext.Provider>
    );
}
