import classNames from "classnames";
import React from "react";
import { useTranslation } from "next-i18next";

export function ProductInfo(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className="flex flex-wrap content-start gap-4 font-normal">
      <input
        className="peer-[info] hidden"
        type="radio"
        name="info"
        id="info"
        defaultChecked
      />
      <label
        className="cursor-pointer text-xl opacity-30 peer-[info]:checked:opacity-100"
        htmlFor="info"
      >
        {t("product.info.description")}
      </label>
      <p
        className={classNames(
          "order-1 hidden w-full",
          "peer-[info]:checked:block"
        )}
      >
        Jacket made of a loose fit makes the product a universal element of the
        upper layer. Two patch pockets and one hidden pocket. Branded lining
        with FABLE pattern. Shoulder pads of medium rigidity for shaping.
      </p>

      <input
        className="peer-[size] hidden"
        type="radio"
        name="info"
        id="size"
      />
      <label
        className="cursor-pointer text-xl opacity-30 peer-[size]:checked:opacity-100"
        htmlFor="size"
      >
        {t("product.info.size")}
      </label>
      <p
        className={classNames(
          "order-1 hidden w-full",
          "peer-[size]:checked:block"
        )}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur,
        esse?
      </p>

      <input
        className="peer-[details] hidden"
        type="radio"
        name="info"
        id="details"
      />
      <label
        className="cursor-pointer text-xl opacity-30 peer-[details]:checked:opacity-100"
        htmlFor="details"
      >
        {t("product.info.details")}
      </label>
      <p
        className={classNames(
          "order-1 hidden w-full",
          "peer-[details]:checked:block"
        )}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
        voluptates quisquam architecto perferendis, tenetur nam dolorum. Fuga
        qui magnam consequatur!
      </p>

      <input
        className="peer-[delivery] hidden"
        type="radio"
        name="info"
        id="delivery"
      />
      <label
        className="cursor-pointer text-xl opacity-30 peer-[delivery]:checked:opacity-100"
        htmlFor="delivery"
      >
        {t("product.info.deliveryAndReturns")}
      </label>
      <p
        className={classNames(
          "order-1 hidden w-full",
          "peer-[delivery]:checked:block"
        )}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam commodi
        quas nemo provident, tenetur asperiores ipsa iusto blanditiis assumenda,
        a rerum suscipit, magni quae illo perspiciatis ratione atque quia
        aperiam.
      </p>
    </div>
  );
}
