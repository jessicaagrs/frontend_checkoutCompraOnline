import ProductsContainer from "./ProductsContainer";
import { Tabs } from "./Tabs";
import TransactionValues from "./TransactionValues";

export default function CheckoutBox() {
    return (
        <div className="md:w-2/4 w-full flex flex-col">
            <Tabs />
            <section className="bg-custom-500 py-5 px-3">
                <ProductsContainer />
            </section>
            <TransactionValues />
        </div>
    );
}
