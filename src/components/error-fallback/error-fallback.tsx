import React from "react";
import { toast, ToastContainer } from "react-toastify";
import { FallbackProps } from "react-error-boundary";
import "react-toastify/dist/ReactToastify.css";

const DEFAULT_TOAST_ID = "toastId";

export function ErrorFallback({ error }: FallbackProps): JSX.Element {
  toast.error(`${error} happened, please try again!`, {
    toastId: DEFAULT_TOAST_ID,
  });
  return <ToastContainer role="alert" />;
}
