import { useEffect, useState } from "react";
import { KeysStorage } from "../../enums/enum";
import useLocalStorage from "../../hooks/useLocalStorage";
import { Buy } from "../../interfaces/buy";

export default function PurchaseCompletedContainer() {
    const { getLocalStorage } = useLocalStorage();
    const [data, setData] = useState<Buy | null>(null);
    const [loaded, setLoaded] = useState(false);

    const fetchData = async () => {
        const MAX_ATTEMPTS = 3;

        const tryFetchData = async (attemptNumber: number): Promise<Buy> => {
            if (attemptNumber > MAX_ATTEMPTS) {
                throw new Error("Erro ao carregar produtos");
            }

            const result = (await getLocalStorage(KeysStorage.BUY)) as Buy;
            if (!result) {
                return tryFetchData(attemptNumber + 1);
            }
            return result;
        };
        try {
            setLoaded(true);
            const result = await tryFetchData(1);
            setData(result);
        } catch (error: any) {
            alert(error.message);
        } finally {
            setLoaded(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="bg-white flex flex-col justify-center items-center gap-3 mb-4 p-4">
            {loaded ? (
                <p className="text-center">Aguarde...</p>
            ) : (
                <>
                    <h1 className="text-xl">Compra efetuada com sucesso</h1>
                    <p className="text-sm">{`****.****.****.${data?.cardNumber}`}</p>
                    <p className="text-sm">{data?.nameHolder}</p>
                    <p className="text-sm">{data?.expirationDate}</p>
                </>
            )}
        </div>
    );
}
