import React from "react";
import Image from "next/image";
import { Carousel, AddToCartForm, ProductInfo } from "~/components";
import { ProductBreadcrumbs } from "../product-breadcrumbs/product-breadcrumbs";
import { Product } from "~/types";

const PRODUCT_IMAGES_RATIO = 0.96;

type ProductCardFullProps = {
  product: Product;
};

export function ProductCardFull({
  product,
}: ProductCardFullProps): JSX.Element {
  return (
    <div
      className="
        grid h-full grid-cols-2 grid-rows-[auto,auto,1fr] gap-6 py-0
        medium:grid-cols-1 medium:grid-rows-none
        small:gap-4
        "
    >
      <div className="col-span-2 medium:col-auto">
        <ProductBreadcrumbs product={product} />
      </div>
      <div className="row-span-2 medium:row-auto">
        <Carousel ratio={PRODUCT_IMAGES_RATIO}>
          {product.images.map(({ id, src }) => (
            <Image key={id} fill src={src} alt={product.name} />
          ))}
        </Carousel>
      </div>
      <AddToCartForm product={product} />
      <ProductInfo />
    </div>
  );
}
