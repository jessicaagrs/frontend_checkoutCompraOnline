import { useEffect, useState } from "react";
import { KeysStorage, TypeCheckout } from "../../enums/enum";
import useCheckoutBuy from "../../hooks/useCheckoutBuy";
import useLocalStorage from "../../hooks/useLocalStorage";
import { Product } from "../../interfaces/product";
import { formatCurrency } from "../../utils/formatter";

const freight = 5.3;
const discount = 30.0;

export default function TransactionValues() {
    const { getLocalStorage, clearLocalStorage } = useLocalStorage();
    const { totalItems, setTypeCheckout, typeCheckout, setValidate } = useCheckoutBuy();
    const [totals, setTotals] = useState({
        subtotal: 0,
        total: 0,
    });

    const handleNextTab = () => {
        if (typeCheckout === TypeCheckout.BAG) {
            setTypeCheckout(TypeCheckout.PAYMENT);
        } else if (typeCheckout === TypeCheckout.PAYMENT) {
            setValidate(true);
        } else if (typeCheckout === TypeCheckout.CONFIRMATION) {
            setTypeCheckout(TypeCheckout.BAG);
            clearLocalStorage(KeysStorage.BUY);
        }
    };

    const fetchData = async () => {
        const MAX_ATTEMPTS = 3;

        const tryFetchData = async (attemptNumber: number): Promise<Product[]> => {
            if (attemptNumber > MAX_ATTEMPTS) {
                throw new Error("Erro ao carregar produtos");
            }

            const result = (await getLocalStorage(KeysStorage.PRODUCTS)) as Product[];
            if (!result) {
                return tryFetchData(attemptNumber + 1);
            }
            return result;
        };

        try {
            const result = await tryFetchData(1);
            const subTotal = result.reduce((acc, item) => acc + item.price * item.quantity, 0);
            const total = subTotal + freight - discount;
            setTotals({
                subtotal: subTotal,
                total,
            });
        } catch (error: any) {
            alert(error.message);
        }
    };

    useEffect(() => {
        fetchData();
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
                    className={` text-white w-full rounded-md md:w-80 h-12 ${
                        typeCheckout === TypeCheckout.CONFIRMATION ? "bg-black" : "bg-custom-700"
                    }`}
                    onClick={handleNextTab}
                >
                    {typeCheckout === TypeCheckout.BAG
                        ? "Seguir para o pagamento"
                        : typeCheckout === TypeCheckout.PAYMENT
                        ? "Finalizar Pedido"
                        : "Voltar ao início do protótipo"}
                </button>
            </div>
        </section>
    );
}
