import React, { useContext } from "react";
import { ImagesCarousel } from "../images-carousel/images-carousel";
import { AddToCartForm } from "../add-to-cart-form/add-to-cart-form";
import { ProductInfo } from "../product-info/product-info";
import { ProductBreadcrumbs } from "../product-breadcrumbs/product-breadcrumbs";
import { ProductPageContext } from "~/pages/product/[id]";

export function ProductCardFull(): JSX.Element {
  const { product } = useContext(ProductPageContext);

  return (
    <>
      {product && (
        <section className="grid h-full grid-cols-2 grid-rows-[auto,auto,1fr] gap-6 py-0">
          <div className="col-span-2">
            <ProductBreadcrumbs />
          </div>
          <div className="row-span-2">
            <ImagesCarousel images={product.images} caption={product.name} />
          </div>
          <AddToCartForm product={product} />
          <ProductInfo />
        </section>
      )}
    </>
  );
}
