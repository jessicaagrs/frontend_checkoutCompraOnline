import { ShieldCheck } from "lucide-react";
import useCheckoutBuy from "../../../hooks/useCheckoutBuy";

export const InformationBox = () => {
    const { totalItems } = useCheckoutBuy();

    return (
        <div className="hidden md:flex md:w-2/4 md:flex-col md:justify-around md:items-center md:p-8 md:bg-custom-200">
            <div className="flex items-center gap-10">
                <img
                    src="/cosmetics.svg"
                    alt="logo da loja"
                    width={50}
                    height={50}
                />
                <h1 className="font-bold text-xl">Nome da loja</h1>
            </div>
            <div className="flex gap-5 bg-white p-2 rounded-md">
                <ShieldCheck />
                <p>COMPRA SEGURA</p>
            </div>
            <div className="flex flex-col gap-6 items-center">
                <img
                    src="/box.svg"
                    alt="caixa representando o produto embalado para entrega"
                    width={250}
                    height={250}
                />
                <p className="font-bold text-lg">Entrega via Transportadora</p>
                <span className="bg-white p-2 rounded-md">{totalItems} item(s)</span>
            </div>
        </div>
    );
};
