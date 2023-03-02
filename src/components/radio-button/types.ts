import { ChangeEventHandler, FocusEventHandler } from 'react';

export type RadioButtonProps = {
  label: string;
  name: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur: FocusEventHandler<HTMLInputElement>;
};
