// import { addProductOrder } from '../store';
import { ProductOrder } from "../types";
// import { useAppDispatch } from "./use-app-dispatch";

export const useAddToOrder = () => {
  // const dispatch = useAppDispatch();

  return (productOrder: ProductOrder) =>
    // dispatch(addProductOrder(productOrder));
    console.log("adding product order", productOrder);
};
