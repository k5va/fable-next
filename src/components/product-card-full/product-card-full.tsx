import React from "react";
import { ImagesCarousel } from "../images-carousel/images-carousel";
import { AddToCartForm } from "../add-to-cart-form/add-to-cart-form";
import { ProductInfo } from "../product-info/product-info";
import { ProductBreadcrumbs } from "../product-breadcrumbs/product-breadcrumbs";
import { Product } from "~/types";

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
        <ImagesCarousel images={product.images} caption={product.name} />
      </div>
      <AddToCartForm product={product} />
      <ProductInfo />
    </div>
  );
}
