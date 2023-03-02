import React, { FormEventHandler, MouseEventHandler, useState } from "react";
import { ColorPicker, SizePicker } from "../../components";
import { AddToCartFormProps } from "./types";
import { useTranslation } from "react-i18next";
import { useAddToOrder } from "../../hooks";
import { ProductColor, ProductSize } from "../../types";
// import { getProductOrderById } from "../../store";
import {
  DEFAULT_PRODUCT_COLOR,
  DEFAULT_PRODUCT_ORDER_COUNT,
  DEFAULT_PRODUCT_SIZE,
} from "./add-to-cart-form.const";
// import { useNavigate } from "react-router-dom";
// import { AppRoute } from "../../const";
import classNames from "classnames";
import { useOrders } from "~/store";

export function AddToCartForm({ product }: AddToCartFormProps) {
  const { id: productId, name, price } = product;
  const { t } = useTranslation();
  // const navigate = useNavigate();
  const addProductToOrder = useAddToOrder();
  // TODO: useCallback?
  const isAddedToCart = Boolean(
    useOrders((state) =>
      state.orders.find(({ product }) => product.id === productId)
    )
  );
  const [size, setSize] = useState<ProductSize>(DEFAULT_PRODUCT_SIZE);
  const [color, setColor] = useState<ProductColor>(DEFAULT_PRODUCT_COLOR);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    addProductToOrder({
      product,
      size,
      color,
      count: DEFAULT_PRODUCT_ORDER_COUNT,
    });
  };

  const handleAddToCartClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (isAddedToCart) {
      e.preventDefault();
      // navigate(AppRoute.ORDER);
      return;
    }
  };

  return (
    <section className="flex flex-col flex-nowrap">
      <p className="mb-8 text-3xl">{name}</p>
      <p className="mb-8 text-3xl">{t("main.product.price", { price })}</p>
      <form className="flex flex-col flex-nowrap gap-8" onSubmit={handleSubmit}>
        <input type="hidden" name="productId" value={product.id} />
        <input type="hidden" name="count" value={DEFAULT_PRODUCT_ORDER_COUNT} />
        <div>
          <ColorPicker selected={color} onChange={setColor} />
        </div>
        <div>
          <SizePicker selected={size} onChange={setSize} />
        </div>
        <button
          className={classNames("button", "self-start px-16", {
            "border-green-500 bg-green-500 text-white": isAddedToCart,
          })}
          type="submit"
          onClick={handleAddToCartClick}
        >
          {t(
            isAddedToCart ? "product.goToCartButton" : "product.addToCartButton"
          )}
        </button>
      </form>
    </section>
  );
}
