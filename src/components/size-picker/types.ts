import { ProductSize } from '../../types';

export type SizePickerProps = {
  selected: string;
  onChange: (size: ProductSize) => void;
};
