import React from "react";
import { useTranslation } from "next-i18next";
import { Tab, TabGroup } from "~/components";

export function ProductInfo(): JSX.Element {
  const { t } = useTranslation();

  return (
    <TabGroup>
      <Tab label={t("product.info.description")}>
        Jacket made of a loose fit makes the product a universal element of the
        upper layer. Two patch pockets and one hidden pocket. Branded lining
        with FABLE pattern. Shoulder pads of medium rigidity for shaping.
      </Tab>
      <Tab label={t("product.info.size")}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur,
        esse?
      </Tab>
      <Tab label={t("product.info.details")}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
        voluptates quisquam architecto perferendis, tenetur nam dolorum. Fuga
        qui magnam consequatur!
      </Tab>
      <Tab label={t("product.info.deliveryAndReturns")}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam commodi
        quas nemo provident, tenetur asperiores ipsa iusto blanditiis assumenda,
        a rerum suscipit, magni quae illo perspiciatis ratione atque quia
        aperiam.
      </Tab>
    </TabGroup>
  );
}
