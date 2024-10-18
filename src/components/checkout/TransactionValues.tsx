import { useEffect, useState } from "react";
import useCheckoutBuy from "../../hooks/useCheckoutBuy";
import useLocalStorage from "../../hooks/useLocalStorage";
import { Product } from "../../interfaces/product";
import { formatCurrency } from "../../utils/formatter";
import { TypeCheckout } from "../../enums/enum";

const freight = 5.3;
const discount = 30.0;

export default function TransactionValues() {
    const { getLocalStorage } = useLocalStorage();
    const { totalItems, setTypeCheckout } = useCheckoutBuy();
    const [totals, setTotals] = useState({
        subtotal: 0,
        total: 0,
    });

    const handlePaymentTab = () => {
        setTypeCheckout(TypeCheckout.PAYMENT);
    };

    useEffect(() => {
        const result = getLocalStorage() as Product[];
        const subTotal = result.reduce((acc, item) => acc + item.price * item.quantity, 0);
        const total = subTotal + freight - discount;
        setTotals({
            subtotal: subTotal,
            total,
        });
    }, []);

    return (
        <section className="p-3 flex flex-col justify-between gap-5 flex-1">
            <div className="flex flex-col gap-2 flex-1">
                <div className="flex justify-between items-center">
                    <span className="text-sm">{`Produtos: (${totalItems} itens)`}</span>
                    <span className="text-sm">{formatCurrency(totals.subtotal)}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-sm">{`Frete: `}</span>
                    <span className="text-sm">{formatCurrency(freight)}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-sm">{`Desconto: `}</span>
                    <span className="text-custom-700 font-bold text-sm">{formatCurrency(discount)}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-base font-bold">{`Subtotal: `}</span>
                    <span className="text-base font-bold">{formatCurrency(totals.subtotal)}</span>
                </div>
            </div>
            <div className="md:flex md:justify-center md:flex-1">
                <button
                    className=" bg-custom-700 text-white w-full rounded-md md:w-80 h-12"
                    onClick={handlePaymentTab}
                >
                    Seguir para o pagamento
                </button>
            </div>
        </section>
    );
}
