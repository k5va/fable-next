import { useCallback } from "react";
import { useTranslation } from "next-i18next";
import {
  ORDER_MAX_CITY_LENGTH,
  ORDER_MAX_COMMENT_LENGTH,
  ORDER_MAX_EMAIL_LENGTH,
  ORDER_MAX_LOYALTY_CARD_LENGTH,
  ORDER_MIN_FIELD_LENGTH,
} from "~/const";
import { Order } from "~/types";

export const useOrderFormError = () => {
  const { t } = useTranslation();

  return useCallback(
    (field: keyof Order, errorType?: unknown) => {
      if (!errorType) {
        return;
      }

      if (errorType === "required") {
        return t("order.errors.required");
      }

      if (errorType === "too_small") {
        return t("order.errors.minLength", {
          minLength: ORDER_MIN_FIELD_LENGTH,
        });
      }

      if (errorType === "too_big") {
        let maxLength = 0;
        switch (field) {
          case "city":
            maxLength = ORDER_MAX_CITY_LENGTH;
            break;
          case "email":
            maxLength = ORDER_MAX_EMAIL_LENGTH;
            break;
          case "loyaltyCard":
            maxLength = ORDER_MAX_LOYALTY_CARD_LENGTH;
            break;
          case "comment":
            maxLength = ORDER_MAX_COMMENT_LENGTH;
            break;
        }

        return t("order.errors.maxLength", { maxLength });
      }

      if (field === "email") {
        return t("order.errors.email");
      }
    },
    [t]
  );
};
