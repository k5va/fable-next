import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  Button,
  Checkbox,
  RadioButton,
  TextArea,
  TextField,
} from "~/components";
import { useSubmitOrder } from "~/hooks";
import { useOrderFormError } from "./hooks/use-order-form-error";
import { useTranslation } from "next-i18next";
import { zodResolver } from "@hookform/resolvers/zod";
import { Legend } from "./ui/legend";
import { CreateOrder } from "~/types";
import { createOrderSchema } from "~/schema";

const orderFormDefaults: CreateOrder = {
  city: "",
  delivery: "toDoor",
  address: "",
  loyaltyCard: "",
  name: "",
  phone: "",
  email: "",
  payment: "card",
  comment: "",
  productOrders: [],
};

export function OrderForm(): JSX.Element {
  const [isAgreeOnTerms, setAgreeOnTerms] = useState(false);
  const { t } = useTranslation();
  const methods = useForm<CreateOrder>({
    defaultValues: orderFormDefaults,
    resolver: zodResolver(createOrderSchema),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;
  const submitOrder = useSubmitOrder();
  const getFieldError = useOrderFormError();

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(submitOrder)}
        className="flex flex-col gap-4"
      >
        {/* City */}
        <fieldset
          className="
            w-[calc(50%-0.5rem)] 
            small:w-full"
        >
          <Legend text={t("order.fields.city.label")} />
          <TextField
            placeholder={t("order.fields.city.placeholder") || undefined}
            {...register("city")}
            error={getFieldError("city", errors.city?.type)}
          />
        </fieldset>

        {/* Delivery */}
        <fieldset
          className="
            flex flex-nowrap gap-4 
            small:flex-wrap"
        >
          <Legend text={t("order.fields.delivery.label")} />
          <RadioButton
            label={t("order.fields.delivery.inStore")}
            value="inStore"
            {...register("delivery")}
          />
          <RadioButton
            label={t("order.fields.delivery.toTheDoor")}
            value="toDoor"
            {...register("delivery")}
          />
        </fieldset>

        {/* Address */}
        <fieldset>
          <Legend text={t("order.fields.address.label")} />
          <TextField
            placeholder={t("order.fields.address.placeholder") || undefined}
            {...register("address")}
            error={getFieldError("address", errors.address?.type)}
          />
        </fieldset>

        {/* Loyalty */}
        <fieldset
          className="
            w-[calc(50%-0.5rem)] 
            small:w-full"
        >
          <Legend text={t("order.fields.point")} />
          <TextField
            label={t("order.fields.loyalty.label") || undefined}
            placeholder={t("order.fields.loyalty.placeholder") || undefined}
            {...register("loyaltyCard")}
            error={getFieldError("loyaltyCard", errors.loyaltyCard?.type)}
          />
        </fieldset>

        {/* recipient */}
        <fieldset className="flex flex-col flex-nowrap gap-2">
          <Legend text={t("order.fields.recipient")} />
          <TextField
            label={t("order.fields.name.label") || undefined}
            placeholder={t("order.fields.name.placeholder") || undefined}
            {...register("name")}
            error={getFieldError("name", errors.name?.type)}
          />
          <TextField
            label={t("order.fields.phone.label") || undefined}
            type="tel"
            placeholder={t("order.fields.phone.placeholder") || undefined}
            {...register("phone")}
            error={getFieldError("phone", errors.phone?.type)}
          />
          <TextField
            label={t("order.fields.email.label") || undefined}
            placeholder={t("order.fields.email.placeholder") || undefined}
            {...register("email")}
            error={getFieldError("email", errors.email?.type)}
          />
        </fieldset>

        <fieldset>
          <Legend text={t("order.fields.payment.label")} />
          <RadioButton
            label={t("order.fields.payment.byCard")}
            value="card"
            {...register("payment")}
          />
        </fieldset>

        <fieldset>
          <Legend text={t("order.fields.comment.label")} />
          <TextArea
            {...register("comment")}
            error={getFieldError("comment", errors.comment?.type)}
          />
        </fieldset>
        <Checkbox
          label={t("order.fields.agreeWithTerms") || undefined}
          checked={isAgreeOnTerms}
          onChange={() => setAgreeOnTerms((value) => !value)}
        />
        <Button
          intent={isAgreeOnTerms ? "secondary" : "disabled"}
          width="full"
          type="submit"
        >
          {t("order.fields.submitOrder")}
        </Button>
      </form>
    </FormProvider>
  );
}
