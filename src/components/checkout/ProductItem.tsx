import { TypeCheckout } from "../../enums/enum";
import useCheckoutBuy from "../../hooks/useCheckoutBuy";
import { Product } from "../../interfaces/product";
import { formatCurrency } from "../../utils/formatter";

type ProductItemProps = {
    product: Product;
};

export const ProductItem = ({ product }: ProductItemProps) => {
    const { typeCheckout } = useCheckoutBuy();

    return (
        <div className="p-5 flex justify-between items-center gap-8">
            <img
                src={product.url}
                alt={product.name}
                width={60}
                height={60}
            />
            <p className="font-normal text-sm p-2 text-black">{product.name}</p>
            {typeCheckout !== TypeCheckout.CONFIRMATION && (
                <div className="flex flex-col gap-2">
                    {product.pricePrevious > 0 && (
                        <p className="text-custom-600 line-through text-sm">{formatCurrency(product.pricePrevious)}</p>
                    )}
                    <p className="text-black font-bold text-sm">{formatCurrency(product.price)}</p>
                </div>
            )}
        </div>
    );
};
