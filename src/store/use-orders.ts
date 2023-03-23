import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import { CreateProductOrder } from "~/types";

type State = {
  orders: CreateProductOrder[];
};

type Actions = {
  addOrder: (order: CreateProductOrder) => void;
  removeOrder: (productId: string) => void;
  incrementProductCount: (productId: string) => void;
  decrementProductCount: (productId: string) => void;
  removeAll: () => void;
};

// TODO: try persist middleware

export const useOrders = create(
  devtools(
    // Support redux devtools
    immer<State & Actions>((set) => ({
      orders: [],
      addOrder: (order: CreateProductOrder) =>
        set((state) => {
          state.orders.push(order);
        }),
      removeOrder: (productId: string) =>
        set((state) => {
          state.orders = state.orders.filter(
            (product) => product.productId !== productId
          );
        }),
      incrementProductCount: (productId: string) =>
        set((state) => {
          const order = state.orders.find(
            (product) => product.productId === productId
          );
          if (order) {
            order.count++;
          }
        }),
      decrementProductCount: (productId: string) =>
        set((state) => {
          const order = state.orders.find(
            (product) => product.productId === productId
          );
          if (order && order.count > 1) {
            order.count--;
          }
        }),
      removeAll: () =>
        set((state) => {
          state.orders = [];
        }),
    }))
  )
);
