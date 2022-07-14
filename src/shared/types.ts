import { MouseEvent, FocusEvent, ChangeEvent } from 'react';

export interface IPATHS {
  main: string;
  notFound: '*';
}

export interface IModal {
  isModalActive: boolean;
  handleModal: () => void;
  isFormSend: boolean;
}

export interface IInputTel {
  onBlur: (event: FocusEvent<HTMLInputElement>) => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  isPhone: string;
  isPhoneBlur: boolean;
  isPhoneError: string;
}

export interface IInputCheckbox {
  onBlur: (event: FocusEvent<HTMLInputElement>) => void;
  onChange: () => void;
  isChecked: boolean;
  isCheckedBlur: boolean;
  isCheckedError: string;
}

export interface IPrimaryButton {
  description: string;
  className: string;
  arrow: string;
  type?: 'submit';
  onClick?: (() => void) | ((event: MouseEvent<HTMLButtonElement>) => void);
  disabled?: boolean;
}
