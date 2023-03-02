import { ChangeEventHandler, FocusEventHandler } from 'react';

export type CheckboxProps = {
  label?: string;
  name?: string;
  checked: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
};
