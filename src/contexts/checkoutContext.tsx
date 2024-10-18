import { createContext, useEffect, useState } from "react";
import { TypeCheckout } from "../enums/enum";
import PRODUCTS from "../data/products";
import { Buy } from "../interfaces/buy";

export const CheckoutContext = createContext({
    typeCheckout: "",
    totalItems: 0,
    validate: false,
    setTypeCheckout: (value: TypeCheckout) => {},
    setTotalItems: (value: number) => {},
    setValidate: (value: boolean) => {},
});

interface ProviderProps {
    children: React.ReactNode;
}

export function CheckoutContextProvider({ children }: ProviderProps) {
    const [typeCheckout, setTypeCheckout] = useState(TypeCheckout.BAG);
    const [totalItems, setTotalItems] = useState(0);
    const [validate, setValidate] = useState(false);

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
                validate,
                setValidate,
            }}
        >
            {children}
        </CheckoutContext.Provider>
    );
}
