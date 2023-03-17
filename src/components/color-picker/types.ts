import { ProductColor } from '../../types';

export type ColorPickerProps = {
  selected: string;
  onChange: (color: ProductColor) => void;
};
