import { FC } from 'react';
import { IInputTel } from '../../../shared/types';
import './InputTel.scss';

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
