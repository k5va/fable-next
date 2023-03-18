import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { BiPlus, BiMinus } from "react-icons/bi";
import { ProductOrderProps } from "./types";
import { useProductOrders } from "~/hooks";
import { Spinner } from "~/components";
import { useGetProductFromContext } from "./hooks/use-get-product-from-context";

export function ProductOrder({ order }: ProductOrderProps): JSX.Element {
  const { productId, size, color, count } = order;
  const { removeProduct, incrementProduct, decrementProduct } =
    useProductOrders();
  const product = useGetProductFromContext(productId);
  const { t } = useTranslation();

  if (!product) {
    return <Spinner />;
  }

  return (
    <div
      className="
        grid grid-cols-[auto,2fr] gap-4 
        small:grid-cols-1"
    >
      <div className="col-span-1">
        <Link href={`/product/${productId}`}>
          <Image
            width="183"
            height="203"
            className="w-full"
            src={product.image.src}
            alt={product.name}
          />
        </Link>
      </div>
      <div
        className="
          grid grid-cols-3 grid-rows-5 items-end text-sm
          small:gap-y-4"
      >
        <p className="col-span-3 mb-2 text-base font-medium">{product.name}</p>
        <p className="col-span-3 mb-2">
          {t("product.collection")}: {product.collection?.name}
        </p>
        <p className="col-span-3">
          {t("product.article")}: {product.article}
        </p>

        <p className="col-span-1">
          {t("product.size")}: <span className="ml-4 font-medium">{size}</span>
        </p>
        <p
          className="
            col-span-1 
            small:col-span-2 small:justify-self-end"
        >
          {t("product.color")}:
          <span className="ml-4 font-medium">{t(`colors.${color}`)}</span>
        </p>
        <div
          className="
            col-span-1 flex flex-nowrap gap-1 justify-self-end
            small:col-span-2 small:justify-self-start"
        >
          {t("product.quantity")}:
          <div className="flex flex-nowrap gap-2">
            <button
              className="transition hover:-translate-y-[1px] hover:scale-110"
              type="button"
              aria-label="Decrement product"
              onClick={() => decrementProduct(product.id)}
            >
              <BiMinus className="relative top-[1px]" />
            </button>
            {count}
            <button
              className="transition hover:-translate-y-[1px] hover:scale-110"
              type="button"
              aria-label="Increment product"
              onClick={() => incrementProduct(product.id)}
            >
              <BiPlus className="relative top-[1px]" />
            </button>
          </div>
        </div>
        <p
          className="
            col-span-2 
            small:col-span-1 small:justify-self-end"
        >
          {t("product.price")}:
          <span className="ml-4 font-medium">
            {t("main.product.price", { price: product.price })}
          </span>
        </p>
        <button
          className="
            col-span-1 justify-self-end transition hover:-translate-y-[1px] hover:scale-110
            small:col-start-3"
          type="button"
          onClick={() => removeProduct(product.id)}
        >
          {t("product.delete")}
        </button>
      </div>
    </div>
  );
}
