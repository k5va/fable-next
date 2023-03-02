import { useSelector } from 'react-redux';
import { useAppDispatch } from './use-app-dispatch';
import {
  getOrders,
  decrementProductCount,
  incrementProductCount,
  removeProductOrder,
} from '../store';

export const useProductOrders = () => {
  const dispatch = useAppDispatch();
  const orders = useSelector(getOrders);

  return {
    orders,
    removeProduct: (id: string) => dispatch(removeProductOrder(id)),
    incrementProduct: (id: string) => dispatch(incrementProductCount(id)),
    decrementProduct: (id: string) => dispatch(decrementProductCount(id)),
  };
};
