import { ChangeEventHandler, FocusEventHandler } from 'react';

export type TextAreaProps = {
  label?: string;
  name: string;
  placeholder?: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  onBlur: FocusEventHandler<HTMLTextAreaElement>;
  error?: string;
};
