import { ChangeEventHandler, FocusEventHandler, HTMLInputTypeAttribute } from 'react';

export type TextFieldProps = {
  name: string;
  label?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  error?: string;
};
