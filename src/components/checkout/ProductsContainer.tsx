import { useEffect, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { Product } from "../../interfaces/product";
import { ProductItem } from "./ProductItem";
import { KeysStorage, TypeCheckout } from "../../enums/enum";
import useCheckoutBuy from "../../hooks/useCheckoutBuy";

export default function ProductsContainer() {
    const { getLocalStorage } = useLocalStorage();
    const [data, setData] = useState<Product[] | null>(null);
    const { typeCheckout } = useCheckoutBuy();
    const [loaded, setLoaded] = useState(true);

    useEffect(() => {
        const result = getLocalStorage(KeysStorage.PRODUCTS) as Product[];
        if (result) {
            setData(result);
            setLoaded(false);
        }
    }, []);

    return (
        <div className="bg-white flex flex-col gap-8">
            {loaded ? (
                <p>Aguarde...</p>
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
