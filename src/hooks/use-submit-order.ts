import { useSelector } from 'react-redux';
import { OrderFormFields } from '../components/order-form/types';
import { getOrders } from '../store';

export const useSubmitOrder = () => {
  const orders = useSelector(getOrders);

  return (formData: OrderFormFields) => {
    const fullOrder = {
      ...formData,
      orders: orders.map(({ product, color, size, count }) => ({
        productId: product.id,
        color,
        size,
        count,
      })),
    };

    console.log(fullOrder);
  };
};
