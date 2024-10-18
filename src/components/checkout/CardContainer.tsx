import { CardForm } from "./CardForm";

export default function CardContainer() {
    return (
        <div className="bg-white flex flex-col gap-8 p-2">
            <h1 className="text-lg font-normal">Cartão de Crédito</h1>
            <CardForm />
        </div>
    )
};