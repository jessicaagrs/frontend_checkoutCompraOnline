import { useState } from "react";
import { maskForInputCard, maskForInputCodeCvv, maskForInputExpirationDate } from "../../utils/formatter";

export const CardForm = () => {
    const [cardNumber, setCardNumber] = useState("");
    const [nameHolder, setNameHolder] = useState("");
    const [expirationDate, setExpirationDate] = useState("");
    const [codeCvv, setCodeCvv] = useState("");

    const handleChangeInputCard = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = maskForInputCard(e.target.value);
        setCardNumber(value);
    };

    const handleChangeInputExpirationDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = maskForInputExpirationDate(e.target.value);
        setExpirationDate(value);
    };

    const handleChangeInputCodeCvv = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = maskForInputCodeCvv(e.target.value);
        setCodeCvv(value);
    };

    return (
        <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
                <label
                    htmlFor="number"
                    className="text-sm font-normal"
                >
                    Número
                </label>
                <input
                    type="text"
                    name="number"
                    className="w-full h-11 rounded outline-none border border-custom-300 text-sm font-normal p-5"
                    placeholder="0000 0000 0000 0000"
                    value={cardNumber}
                    onChange={handleChangeInputCard}
                    maxLength={19}
                />
            </div>
            <div className="flex flex-col gap-2">
                <label
                    htmlFor="nameHolder"
                    className="text-sm font-normal"
                >
                    Nome do titular do cartão
                </label>
                <input
                    type="text"
                    name="nameHolder"
                    className="w-full h-11 rounded outline-none border border-custom-300 text-sm font-normal p-5"
                    placeholder="Nome impresso no cartão"
                    value={nameHolder}
                    onChange={e => setNameHolder(e.target.value)}
                />
            </div>
            <div className="flex gap-5">
                <div className="flex flex-col gap-2">
                    <label htmlFor="expirationDate">Data de validade</label>
                    <input
                        type="text"
                        name="expirationDate"
                        className="w-full h-11 rounded outline-none border border-custom-300 text-sm font-normal p-5"
                        placeholder="MM/AA"
                        value={expirationDate}
                        onChange={handleChangeInputExpirationDate}
                        maxLength={5}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="codeCvv">Código CVV</label>
                    <input
                        type="text"
                        name="codeCvv"
                        className="w-full h-11 rounded outline-none border border-custom-300 text-sm font-normal p-5"
                        placeholder="000"
                        value={codeCvv}
                        onChange={handleChangeInputCodeCvv}
                        maxLength={3}
                    />
                </div>
            </div>
        </form>
    );
};
