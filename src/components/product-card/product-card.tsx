import React from "react";
import { useTranslation } from "next-i18next";
import { ProductCardProps } from "./types";
import Image from "next/image";
import Link from "next/link";

export function ProductCard({ product }: ProductCardProps): JSX.Element {
  const { id, name, price, image } = product;
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center">
      <div className="mb-8 bg-gray-300">
        <Link href={`/product/${id}`}>
          <Image width="427" height="427" src={image.src} alt={name} />
        </Link>
      </div>
      <h5 className="mb-2 text-lg font-normal opacity-40">{name}</h5>
      <p className="text-2xl">{t("main.product.price", { price })}</p>
    </div>
  );
}
