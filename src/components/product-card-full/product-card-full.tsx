import React from "react";
import { ProductCardFullProps } from "./types";
import { useLoadProductById } from "../../hooks";
import { Spinner } from "../spinner/spinner";
import { ImagesCarousel } from "../images-carousel/images-carousel";
import { AddToCartForm } from "../add-to-cart-form/add-to-cart-form";
import { ProductInfo } from "../product-info/product-info";
import { ProductBreadcrumbs } from "../product-breadcrumbs/product-breadcrumbs";
import { Container } from "~/components";

export function ProductCardFull({
  productId,
}: ProductCardFullProps): JSX.Element {
  const { data: product, isLoading } = useLoadProductById(productId);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        product && (
          <Container>
            <section className="mb-6 grid grid-cols-2 grid-rows-3 gap-6 py-0 px-14">
              <div className="col-span-2">
                <ProductBreadcrumbs product={product} />
              </div>
              <div className="row-span-2">
                <ImagesCarousel
                  images={product.images}
                  caption={product.name}
                />
              </div>
              <AddToCartForm product={product} />
              <ProductInfo />
            </section>
          </Container>
        )
      )}
    </>
  );
}
