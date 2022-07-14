import { FC } from 'react';
import './InputCheckbox.scss';

export interface IInputCheckbox {
  onBlur: string;
  onChange: string;
  checked: boolean;
}

const InputCheckbox: FC<IInputCheckbox> = ({ onBlur, onChange, checked }) => {
  return (
    <div className="input-checkbox__wrapper">
      <label className="input-checkbox__label">
        <input
          type="checkbox"
          id="checkbox"
          name="checkbox"
          onBlur={onBlur}
          onChange={onChange}
          checked={checked}
        />
        <span className="input-checkbox__checkmark" />
      </label>
      <p className="input-checkbox__info">
        By clicking the button you agree to the terms&nbsp;
        <a href="#" className="fw-medium color-orange">
          Privacy Policy
        </a>
      </p>
    </div>
  );
};

export { InputCheckbox };
