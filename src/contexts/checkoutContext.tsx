import { createContext, useState } from "react";
import { TypeCheckout } from "../enums/enum";

export const CheckoutContext = createContext({
    typeCheckout: "",
    setTypeCheckout: (value: TypeCheckout) => {},
});

interface ProviderProps {
    children: React.ReactNode;
}

export function CheckoutContextProvider({ children }: ProviderProps) {
    const [typeCheckout, setTypeCheckout] = useState(TypeCheckout.BAG);

    return (
        <CheckoutContext.Provider
            value={{
                typeCheckout,
                setTypeCheckout,
            }}
        >
            {children}
        </CheckoutContext.Provider>
    );
}
