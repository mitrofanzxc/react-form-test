import { FC, FocusEvent, ChangeEvent } from 'react';
import './InputTel.scss';

export interface IInputTel {
  onBlur: (event: FocusEvent<HTMLInputElement>) => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  isPhone: string;
  isPhoneBlur: boolean;
  isPhoneError: string;
}

const InputTel: FC<IInputTel> = ({ onBlur, onChange, isPhone, isPhoneBlur, isPhoneError }) => {
  return (
    <>
      <label className="input-phone__label">
        Enter your phone number:
        <input
          className="input-phone"
          type="tel"
          id="tel"
          name="tel"
          placeholder="+7 ( _ _ _ ) _ _ - _ _ - _ _"
          onBlur={onBlur}
          onChange={onChange}
          value={isPhone}
        />
      </label>
      <p className="error-field">{isPhoneBlur && isPhoneError ? isPhoneError : ''}</p>
    </>
  );
};

export { InputTel };
