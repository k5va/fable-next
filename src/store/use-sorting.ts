import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { ProductSortingType } from "~/types";
import { ProductSorting } from "~/const";

type State = {
  sorting: ProductSortingType;
};

type Actions = {
  change: (sorting: ProductSortingType) => void;
};

// TODO: try persist middleware
export const useSorting = create(
  // Support redux devtools
  devtools<State & Actions>((set) => ({
    sorting: ProductSorting.New,
    change: (sorting) => set(() => ({ sorting })),
  }))
);
