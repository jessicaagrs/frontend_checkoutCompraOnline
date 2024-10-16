import { useContext } from "react";
import { CheckoutContext } from "../contexts/checkoutContext";

export default function useCheckoutBuy() {
    return useContext(CheckoutContext);
}