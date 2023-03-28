import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { BiPlus, BiMinus } from "react-icons/bi";
import { useProductOrders } from "~/hooks";
import type { ProductOrder } from "~/types";
import classNames from "classnames";

type ProductOrderProps = {
  productOrder: ProductOrder;
  readonly?: boolean;
};

export function ProductOrder({
  productOrder,
  readonly = false,
}: ProductOrderProps): JSX.Element {
  const { product, size, color, count } = productOrder;
  const { removeProduct, incrementProduct, decrementProduct } =
    useProductOrders();
  const { t } = useTranslation();

  return (
    <div
      className="
        grid grid-cols-[auto,2fr] gap-4 
        small:grid-cols-1"
    >
      <div className="col-span-1">
        <Link href={`/product/${product.id}`}>
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
              className={classNames("hover:animate-scale", {
                hidden: readonly,
              })}
              type="button"
              aria-label="Decrement product"
              onClick={() => decrementProduct(product.id)}
            >
              <BiMinus className="relative top-[1px]" />
            </button>
            {count}
            <button
              className={classNames("hover:animate-scale", {
                hidden: readonly,
              })}
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
          className={classNames(
            "col-span-1 justify-self-end hover:animate-scale small:col-start-3",
            { hidden: readonly }
          )}
          type="button"
          onClick={() => removeProduct(product.id)}
        >
          {t("product.delete")}
        </button>
      </div>
    </div>
  );
}
