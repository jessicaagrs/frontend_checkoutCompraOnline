import { useEffect, useState } from "react";
import { KeysStorage, TypeCheckout } from "../../enums/enum";
import useCheckoutBuy from "../../hooks/useCheckoutBuy";
import useLocalStorage from "../../hooks/useLocalStorage";
import { Buy } from "../../interfaces/buy";
import {
    getLastFourChars,
    maskForInputCard,
    maskForInputCodeCvv,
    maskForInputExpirationDate,
} from "../../utils/formatter";

export const CardForm = () => {
    const [cardNumber, setCardNumber] = useState("");
    const [nameHolder, setNameHolder] = useState("");
    const [expirationDate, setExpirationDate] = useState("");
    const [codeCvv, setCodeCvv] = useState("");
    const [error, setError] = useState({
        cardNumber: false,
        nameHolder: false,
        expirationDate: false,
        codeCvv: false,
    });
    const { validate, setValidate, setTypeCheckout } = useCheckoutBuy();
    const { setLocalStorage } = useLocalStorage();

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

    const handleValidateForm = () => {
        if (!cardNumber || cardNumber.length < 19) {
            setError({ ...error, cardNumber: true });
            setValidate(false);
            return;
        }

        if (!nameHolder) {
            setError({ ...error, nameHolder: true });
            setValidate(false);
            return;
        }

        if (!expirationDate || expirationDate.length < 5) {
            setError({ ...error, expirationDate: true });
            setValidate(false);
            return;
        }

        if (!codeCvv || codeCvv.length < 3) {
            setError({ ...error, codeCvv: true });
            setValidate(false);
            return;
        }

        const buy: Buy = {
            cardNumber: getLastFourChars(cardNumber),
            nameHolder,
            expirationDate,
        };

        setLocalStorage(buy, KeysStorage.BUY);

        setError({
            cardNumber: false,
            nameHolder: false,
            expirationDate: false,
            codeCvv: false,
        });
        setCardNumber("");
        setNameHolder("");
        setExpirationDate("");
        setCodeCvv("");

        setTypeCheckout(TypeCheckout.CONFIRMATION);
    };

    useEffect(() => {
        if (validate) handleValidateForm();
    }, [validate]);

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
                    className={`w-full h-11 rounded outline-none border border-custom-300 text-sm font-normal p-5 ${
                        error.cardNumber ? "border-custom-800" : ""
                    }`}
                    placeholder="0000 0000 0000 0000"
                    value={cardNumber}
                    onChange={handleChangeInputCard}
                    maxLength={19}
                />
                {error.cardNumber && <p className="text-xs text-custom-800">insira um número de cartão válido</p>}
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
                    className={`w-full h-11 rounded outline-none border border-custom-300 text-sm font-normal p-5 ${
                        error.nameHolder ? "border-custom-800" : ""
                    }`}
                    placeholder="Nome impresso no cartão"
                    value={nameHolder}
                    onChange={e => setNameHolder(e.target.value)}
                />
                {error.nameHolder && <p className="text-xs text-custom-800">insira um número de cartão válido</p>}
            </div>
            <div className="flex gap-5">
                <div className="flex flex-col gap-2">
                    <label htmlFor="expirationDate">Data de validade</label>
                    <input
                        type="text"
                        name="expirationDate"
                        className={`w-full h-11 rounded outline-none border border-custom-300 text-sm font-normal p-5 ${
                            error.expirationDate ? "border-custom-800" : ""
                        }`}
                        placeholder="MM/AA"
                        value={expirationDate}
                        onChange={handleChangeInputExpirationDate}
                        maxLength={5}
                    />
                    {error.expirationDate && (
                        <p className="text-xs text-custom-800">insira um número de cartão válido</p>
                    )}
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="codeCvv">Código CVV</label>
                    <input
                        type="text"
                        name="codeCvv"
                        className={`w-full h-11 rounded outline-none border border-custom-300 text-sm font-normal p-5 ${
                            error.codeCvv ? "border-custom-800" : ""
                        }`}
                        placeholder="000"
                        value={codeCvv}
                        onChange={handleChangeInputCodeCvv}
                        maxLength={3}
                    />
                    {error.codeCvv && <p className="text-xs text-custom-800">insira um número de cartão válido</p>}
                </div>
            </div>
        </form>
    );
};
