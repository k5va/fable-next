import React from "react";
import { useTranslation } from "next-i18next";
import { ProductOrderProps } from "./types";
import { useLoadCollectionById, useProductOrders } from "../../hooks";
import Link from "next/link";
import Image from "next/image";

export function ProductOrder({ order }: ProductOrderProps): JSX.Element {
  const { removeProduct, incrementProduct, decrementProduct } =
    useProductOrders();
  const { product, size, color, count } = order;
  const { data: collection } = useLoadCollectionById(product.collectionId);
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="col-span-1 bg-gray-300">
        <Link href={`/product/${product.id}`}>
          <Image src={product.image.src} alt={product.name} />
        </Link>
      </div>
      <div className="col-span-2 grid grid-cols-3 grid-rows-5 items-end text-sm">
        <p className="col-span-3 mb-2 text-base font-medium">{product.name}</p>
        <p className="col-span-3 mb-2">
          {t("product.collection")}: {collection?.name}
        </p>
        <p className="col-span-3">
          {t("product.article")}: {product.article}
        </p>

        <p className="col-span-1">
          {t("product.size")}: <span className="ml-4 font-medium">{size}</span>
        </p>
        <p className="col-span-1">
          {t("product.color")}:{" "}
          <span className="ml-4 font-medium">{t(`colors.${color}`)}</span>
        </p>
        <div className="col-span-1 flex flex-nowrap justify-self-end">
          {t("product.quantity")}:{" "}
          <div className="flex flex-nowrap gap-2">
            <button
              type="button"
              aria-label="Decrement product"
              onClick={() => decrementProduct(product.id)}
            >
              <span aria-hidden>-</span>
            </button>
            {count}
            <button
              type="button"
              aria-label="Increment product"
              onClick={() => incrementProduct(product.id)}
            >
              <span aria-hidden>+</span>
            </button>
          </div>
        </div>
        <p className="col-span-2">
          {t("product.price")}:{" "}
          <span className="ml-4 font-medium">
            {t("main.product.price", { price: product.price })}
          </span>
        </p>
        <button
          className="col-span-1 justify-self-end"
          type="button"
          onClick={() => removeProduct(product.id)}
        >
          {t("product.delete")}
        </button>
      </div>
    </div>
  );
}
