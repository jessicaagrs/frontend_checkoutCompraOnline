import { useEffect, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { Product } from "../../interfaces/product";
import { ProductItem } from "./ProductItem";

export default function ProductsContainer() {
    const { getLocalStorage } = useLocalStorage();
    const [data, setData] = useState<Product[] | null>(null);

    useEffect(() => {
        const result = getLocalStorage();
        setData(result);
    }, []);

    return (
        <div className="bg-custom-500 py-5 px-3">
            <div className="bg-white flex flex-col gap-14">
                {data?.map(item => (
                    <ProductItem
                        product={item}
                        key={item.id}
                    />
                ))}
            </div>
        </div>
    );
}
