import { TypeCheckout } from "../../enums/enum";
import useCheckoutBuy from "../../hooks/useCheckoutBuy";
import CardContainer from "./CardContainer";
import ProductsContainer from "./ProductsContainer";
import PurchaseCompletedContainer from "./PurchaseCompletedContainer";
import { Tabs } from "./Tabs";
import TransactionValues from "./TransactionValues";

export default function CheckoutBox() {
    const { typeCheckout } = useCheckoutBuy();
    return (
        <div className="md:w-2/4 w-full flex flex-col">
            <Tabs />
            <section className="bg-custom-500 py-5 px-3">
                {typeCheckout === TypeCheckout.BAG && <ProductsContainer />}
                {typeCheckout === TypeCheckout.PAYMENT && <CardContainer />}
                {typeCheckout === TypeCheckout.CONFIRMATION && (
                    <>
                        <PurchaseCompletedContainer />
                        <ProductsContainer />
                    </>
                )}
            </section>
            <TransactionValues />
        </div>
    );
}
