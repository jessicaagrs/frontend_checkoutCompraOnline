import { useEffect, useState } from "react";
import { KeysStorage, TypeCheckout } from "../../enums/enum";
import useCheckoutBuy from "../../hooks/useCheckoutBuy";
import useLocalStorage from "../../hooks/useLocalStorage";
import { Product } from "../../interfaces/product";
import { ProductItem } from "./ProductItem";

export default function ProductsContainer() {
    const { getLocalStorage } = useLocalStorage();
    const [data, setData] = useState<Product[] | null>(null);
    const { typeCheckout } = useCheckoutBuy();
    const [loaded, setLoaded] = useState(false);

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
        <div className="bg-white flex flex-col gap-8">
            {loaded ? (
                <p className="text-center">Aguarde...</p>
            ) : (
                <>
                    {typeCheckout === TypeCheckout.CONFIRMATION && <h2 className="p-5 text-lg">Produtos</h2>}
                    {data?.map(item => (
                        <ProductItem
                            product={item}
                            key={item.id}
                        />
                    ))}
                </>
            )}
        </div>
    );
}
