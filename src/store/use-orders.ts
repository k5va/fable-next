import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import { ProductOrder } from "~/types";

type State = {
  orders: ProductOrder[];
};

type Actions = {
  addOrder: (order: ProductOrder) => void;
  removeOrder: (productId: string) => void;
  incrementProductCount: (productId: string) => void;
  decrementProductCount: (productId: string) => void;
};

// TODO: try persist middleware

export const useOrders = create(
  devtools(
    // Support redux devtools
    immer<State & Actions>((set) => ({
      orders: [],
      addOrder: (order: ProductOrder) =>
        set((state) => {
          state.orders.push(order);
        }),
      removeOrder: (productId: string) =>
        set((state) => {
          state.orders = state.orders.filter(
            ({ product }) => product.id !== productId
          );
        }),
      incrementProductCount: (productId: string) =>
        set((state) => {
          const order = state.orders.find(
            ({ product }) => product.id === productId
          );
          if (order) {
            order.count++;
          }
        }),
      decrementProductCount: (productId: string) =>
        set((state) => {
          const order = state.orders.find(
            ({ product }) => product.id === productId
          );
          if (order && order.count > 1) {
            order.count--;
          }
        }),
    }))
  )
);
