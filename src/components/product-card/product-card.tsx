import React from "react";
import { useTranslation } from "next-i18next";
import { ProductCardProps } from "./types";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BiHeart } from "react-icons/bi";

export function ProductCard({ product }: ProductCardProps): JSX.Element {
  const { id, name, price, image } = product;
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center">
      <div className="mb-8 overflow-hidden rounded-md bg-gray-300 small:mb-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          className="group"
        >
          <Link href={`/product/${id}`}>
            <Image width="427" height="427" src={image.src} alt={name} />
          </Link>
        </motion.div>
      </div>
      <div
        className="
          mb-2 flex gap-3
          small:mb-0"
      >
        <h5
          className="
            text-lg font-normal opacity-40 
            small:text-xs"
        >
          {name}
        </h5>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}>
          <BiHeart className="text-xl small:text-xs" color="red" />
        </motion.button>
      </div>
      <p className="text-2xl small:text-sm">
        {t("main.product.price", { price })}
      </p>
    </div>
  );
}
