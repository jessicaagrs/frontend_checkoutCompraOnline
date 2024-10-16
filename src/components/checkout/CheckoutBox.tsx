import { TypeCheckout } from "../../enums/enum";
import useCheckoutBuy from "../../hooks/useCheckoutBuy";
import ProductsContainer from "./ProductsContainer";

export default function CheckoutBox() {
    const { typeCheckout } = useCheckoutBuy();

    return (
        <div className="md:w-2/4 w-full">
            <div className="flex justify-center items-center gap-5 border-b border-custom-300 pt-2">
                <button
                    className={`${
                        typeCheckout === TypeCheckout.BAG
                            ? "font-bold text-black relative after:content-[''] after:block after:w-16 after:h-1 after:bg-black  after:duration-500 after:ease-in-out"
                            : "text-custom-400 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-white  after:duration-500 after:ease-in-out"
                    }`}
                    disabled={typeCheckout !== TypeCheckout.BAG}
                >
                    Sacola
                </button>
                <button
                    className={`${
                        typeCheckout === TypeCheckout.PAYMENT
                            ? "font-bold text-black relative after:content-[''] after:block after:w-18 after:h-1 after:bg-black  after:duration-500 after:ease-in-out"
                            : "text-custom-400 relative after:content-[''] after:block after:w-18 after:h-1 after:bg-white  after:duration-500 after:ease-in-out"
                    }`}
                    disabled={typeCheckout !== TypeCheckout.PAYMENT}
                >
                    Pagamento
                </button>
                <button
                    className={`${
                        typeCheckout === TypeCheckout.CONFIRMATION
                            ? "font-bold text-black relative after:content-[''] after:block after:w-18 after:h-1 after:bg-black  after:duration-500 after:ease-in-out"
                            : "text-custom-400 relative after:content-[''] after:block after:w-18 after:h-1 after:bg-white  after:duration-500 after:ease-in-out"
                    }`}
                    disabled={typeCheckout !== TypeCheckout.CONFIRMATION}
                >
                    Confirmação
                </button>
            </div>
            <ProductsContainer />
        </div>
    );
}
