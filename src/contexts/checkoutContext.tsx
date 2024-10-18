import { createContext, useEffect, useState } from "react";
import PRODUCTS from "../data/products";
import { TypeCheckout } from "../enums/enum";

export const CheckoutContext = createContext({
    typeCheckout: "",
    totalItems: 0,
    validate: false,
    setTypeCheckout: (_value: TypeCheckout) => {},
    setTotalItems: (_value: number) => {},
    setValidate: (_value: boolean) => {},
});

interface ProviderProps {
    children: React.ReactNode;
}

export function CheckoutContextProvider({ children }: ProviderProps) {
    const [typeCheckout, setTypeCheckout] = useState(TypeCheckout.BAG);
    const [totalItems, setTotalItems] = useState(0);
    const [validate, setValidate] = useState(false);

    useEffect(() => {
        if (PRODUCTS) {
            const totalInitialItems = PRODUCTS?.reduce((acc, item) => acc + item.quantity, 0);
    
            if (totalInitialItems) {
                setTotalItems(totalInitialItems);
            }
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
