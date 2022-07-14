import { MouseEvent } from 'react';

export interface IPrimaryButton {
  description: string;
  className: string;
  arrow: string;
  type?: 'submit';
  onClick?: (() => void) | ((event: MouseEvent<HTMLButtonElement>) => void);
  disabled?: boolean;
}
