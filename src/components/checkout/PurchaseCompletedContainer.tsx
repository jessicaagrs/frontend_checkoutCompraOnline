import { useEffect, useState } from "react";
import { KeysStorage } from "../../enums/enum";
import useLocalStorage from "../../hooks/useLocalStorage";
import { Buy } from "../../interfaces/buy";

export default function PurchaseCompletedContainer() {
    const { getLocalStorage } = useLocalStorage();
    const [data, setData] = useState<Buy | null>(null);

    useEffect(() => {
        const result = getLocalStorage(KeysStorage.BUY);
        if (result) {
            setData(result);
        }
    }, []);

    return (
        <div className="bg-white flex flex-col justify-center items-center gap-3 mb-4 p-4">
            <h1 className="text-xl">Compra efetuada com sucesso</h1>
            <p className="text-sm">{`****.****.****.${data?.cardNumber}`}</p>
            <p className="text-sm">{data?.nameHolder}</p>
            <p className="text-sm">{data?.expirationDate}</p>
        </div>
    );
}
