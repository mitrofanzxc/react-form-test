import { MouseEvent } from 'react';

export interface IPATHS {
  main: string;
  notFound: '*';
}

export interface IPrimaryButton {
  description: string;
  className: string;
  arrow: string;
  type?: 'submit';
  onClick?: (() => void) | ((event: MouseEvent<HTMLButtonElement>) => void);
  disabled?: boolean;
}
