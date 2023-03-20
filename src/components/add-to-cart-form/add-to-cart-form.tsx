import React, { FormEventHandler, useState } from "react";
import { Button, ColorPicker, SizePicker } from "~/components";
import { AddToCartFormProps } from "./types";
import { useTranslation } from "next-i18next";
import { ProductColor, ProductSize } from "~/types";
import {
  DEFAULT_PRODUCT_COLOR,
  DEFAULT_PRODUCT_ORDER_COUNT,
  DEFAULT_PRODUCT_SIZE,
} from "./add-to-cart-form.const";
import { AppRoute } from "~/const";
import { useAddToCart } from "./hooks/use-add-to-cart";
import { useRouter } from "next/router";

export function AddToCartForm({ product }: AddToCartFormProps) {
  const { id: productId, name, price } = product;
  const { t } = useTranslation();
  const router = useRouter();
  const [size, setSize] = useState<ProductSize>(DEFAULT_PRODUCT_SIZE);
  const [color, setColor] = useState<ProductColor>(DEFAULT_PRODUCT_COLOR);
  const [isAddedToCart, addProductToOrder] = useAddToCart(productId);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    addProductToOrder({
      productId,
      size,
      color,
      count: DEFAULT_PRODUCT_ORDER_COUNT,
    });
    return router.push(AppRoute.ORDER);
  };

  return (
    <section
      className="
        flex flex-col flex-nowrap 
        medium:items-center
        "
    >
      <p
        className="
        mb-8 text-3xl 
        medium:mb-1 medium:opacity-40
        small:text-xs"
      >
        {name}
      </p>
      <p
        className="
        mb-8 text-3xl
        small:mb-4 small:text-base"
      >
        {t("main.product.price", { price })}
      </p>
      <form
        className="
          flex flex-col flex-nowrap gap-8 
          medium:items-center"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="productId" value={product.id} />
        <input type="hidden" name="count" value={DEFAULT_PRODUCT_ORDER_COUNT} />
        <div>
          <ColorPicker selected={color} onChange={setColor} />
        </div>
        <div className="medium:order-first">
          <SizePicker selected={size} onChange={setSize} />
        </div>
        <Button type="submit" intent={isAddedToCart ? "disabled" : "secondary"}>
          {t(
            isAddedToCart ? "product.goToCartButton" : "product.addToCartButton"
          )}
        </Button>
      </form>
    </section>
  );
}
