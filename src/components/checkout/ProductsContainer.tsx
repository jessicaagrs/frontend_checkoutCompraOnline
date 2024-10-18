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
        <div className="bg-white flex flex-col gap-8">
            {data?.map(item => (
                <ProductItem
                    product={item}
                    key={item.id}
                />
            ))}
        </div>
    );
}
