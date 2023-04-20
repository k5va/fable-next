import { useMutation, useQueryClient } from "react-query";
import { setFavoriteProduct } from "~/api";

export const useAddToFavorites = (productId: string) => {
  const queryClient = useQueryClient();
  const { mutateAsync: addToFavorites } = useMutation({
    mutationFn: setFavoriteProduct,
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["products", productId] });
    },
  });

  return { addToFavorites };
};
