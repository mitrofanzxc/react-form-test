import { FC } from 'react';
import './InputTel.scss';

export interface IInputTel {
  onBlur: string;
  onChange: string;
  value: string;
}

const InputTel: FC<IInputTel> = ({ onBlur, onChange, value }) => {
  return (
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
        value={value}
      />
    </label>
  );
};

export { InputTel };
