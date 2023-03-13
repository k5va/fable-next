import React from "react";
import { useTranslation } from "next-i18next";

export function ProductInfo(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div
      className="
      flex flex-wrap content-start gap-4 font-normal
      small:flex-col small:flex-nowrap"
    >
      <input
        className="peer/info hidden"
        type="radio"
        name="info"
        id="info"
        defaultChecked
      />
      <label
        className="cursor-pointer text-xl opacity-30 peer-checked/info:opacity-100"
        htmlFor="info"
      >
        {t("product.info.description")}
      </label>
      <p
        className="
          order-1 hidden w-full peer-checked/info:block
          small:order-none"
      >
        Jacket made of a loose fit makes the product a universal element of the
        upper layer. Two patch pockets and one hidden pocket. Branded lining
        with FABLE pattern. Shoulder pads of medium rigidity for shaping.
      </p>

      <input className="peer/size hidden" type="radio" name="info" id="size" />
      <label
        className="cursor-pointer text-xl opacity-30 peer-checked/size:opacity-100"
        htmlFor="size"
      >
        {t("product.info.size")}
      </label>
      <p
        className="
          order-1 hidden w-full peer-checked/size:block
          small:order-none"
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur,
        esse?
      </p>

      <input
        className="peer/details hidden"
        type="radio"
        name="info"
        id="details"
      />
      <label
        className="cursor-pointer text-xl opacity-30 peer-checked/details:opacity-100"
        htmlFor="details"
      >
        {t("product.info.details")}
      </label>
      <p
        className="
          order-1 hidden w-full peer-checked/details:block
          small:order-none"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
        voluptates quisquam architecto perferendis, tenetur nam dolorum. Fuga
        qui magnam consequatur!
      </p>

      <input
        className="peer/delivery hidden"
        type="radio"
        name="info"
        id="delivery"
      />
      <label
        className="cursor-pointer text-xl opacity-30 peer-checked/delivery:opacity-100"
        htmlFor="delivery"
      >
        {t("product.info.deliveryAndReturns")}
      </label>
      <p
        className="
          order-1 hidden w-full peer-checked/delivery:block
          small:order-none"
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam commodi
        quas nemo provident, tenetur asperiores ipsa iusto blanditiis assumenda,
        a rerum suscipit, magni quae illo perspiciatis ratione atque quia
        aperiam.
      </p>
    </div>
  );
}
