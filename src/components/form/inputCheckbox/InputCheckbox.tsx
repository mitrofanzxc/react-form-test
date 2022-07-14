import { FC, FocusEvent } from 'react';
import './InputCheckbox.scss';

export interface IInputCheckbox {
  onBlur: (event: FocusEvent<HTMLInputElement>) => void;
  onChange: () => void;
  isChecked: boolean;
  isCheckedBlur: boolean;
  isCheckedError: string;
}

const InputCheckbox: FC<IInputCheckbox> = ({
  onBlur,
  onChange,
  isChecked,
  isCheckedBlur,
  isCheckedError,
}) => {
  return (
    <>
      <div className="input-checkbox__wrapper">
        <label className="input-checkbox__label">
          <input
            className="input-checkbox"
            type="checkbox"
            id="checkbox"
            name="checkbox"
            onBlur={onBlur}
            onChange={onChange}
            checked={isChecked}
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
      <p className="error-field">{isCheckedBlur && isCheckedError ? isCheckedError : ''}</p>
    </>
  );
};

export { InputCheckbox };
