import { useErrorHandler } from "react-error-boundary";
import { useQuery } from "react-query";
import { fetchProducts } from "~/api";
import { LoadResult, ProductOrder } from "~/types";
import { useProductOrders } from "~/hooks/use-product-orders";

export const useEnrichedProductOrders = (): LoadResult<ProductOrder[]> => {
  const { orders: productOrders } = useProductOrders();
  const ids = productOrders.map(({ productId }) => productId);
  const {
    data: products,
    error,
    isLoading,
  } = useQuery(["products", "all"], () => fetchProducts(ids));

  useErrorHandler(error);

  if (products) {
    const enrichedProductOrders = productOrders.map((productOrder) => {
      const product = products.find(({ id }) => id === productOrder.productId);
      if (!product) {
        throw new Error("Product from order not found!");
      }

      return { ...productOrder, product };
    });

    return { data: enrichedProductOrders, error, isLoading };
  }

  return { data: [], error, isLoading };
};
