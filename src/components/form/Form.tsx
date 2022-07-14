import { FC, useState, useEffect, FocusEvent, ChangeEvent, MouseEvent } from 'react';
import { InputCheckbox } from './inputCheckbox/InputCheckbox';
import { InputTel } from './inputTel/InputTel';
import { PrimaryButton } from '../buttons';
import './Form.scss';

const Form: FC = () => {
  const [isPhone, setIsPhone] = useState<string>('');
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isPhoneBlur, setIsPhoneBlur] = useState<boolean>(false);
  const [isCheckedBlur, setIsCheckedBlur] = useState<boolean>(false);
  const [isPhoneError, setIsPhoneError] = useState<string>('The field cannot be empty.');
  const [isCheckedError, setIsCheckedError] = useState<string>('You must accept the terms.');
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const blurHandler = (event: FocusEvent<HTMLInputElement>) => {
    const NAME = event.currentTarget.name;
    switch (NAME) {
      case 'phone':
        setIsPhoneBlur(true);
        break;
      case 'checkbox':
        setIsCheckedBlur(true);
        break;
    }
  };

  const phoneHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const VALUE = event.currentTarget.value;
    setIsPhone(VALUE);
    const result =
      /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/gm;
    if (!result.test(String(VALUE).toLocaleLowerCase())) {
      setIsPhoneError('Invalid number.');
    } else {
      setIsPhoneError('');
    }
  };

  const checkboxHandler = () => {
    setIsChecked(!isChecked);
    if (isChecked) {
      setIsCheckedError('You must accept the terms.');
    } else {
      setIsCheckedError('');
    }
  };

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsPhone('');
    setIsChecked(false);
  };

  useEffect(() => {
    if (isPhoneError || isCheckedError) {
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
    }
  }, [isPhoneError, isCheckedError]);

  return (
    <section className="form-wrapper">
      <h2 className="h2">Leave a request quickly!</h2>
      <p>Enter the number, we will call you within 10 minutes during work hours:</p>
      <p>Mon – Fri 9:00 - 18:00, Sat 10:00 - 18:00.</p>
      <form data-testid="form" className="form">
        <InputTel
          onBlur={(event) => blurHandler(event)}
          onChange={(event) => phoneHandler(event)}
          isPhone={isPhone}
          isPhoneBlur={isPhoneBlur}
          isPhoneError={isPhoneError}
        />
        <label className="input-phone__label">
          Enter your phone number:
          <input
            className="primary-button input-phone"
            type="tel"
            id="tel"
            name="tel"
            placeholder="+7 ( _ _ _ ) _ _ - _ _ - _ _"
            onBlur={(event) => blurHandler(event)}
            onChange={(event) => phoneHandler(event)}
            value={isPhone}
          />
        </label>
        <p className="error-field">{isPhoneBlur && isPhoneError ? isPhoneError : ''}</p>
        <PrimaryButton
          description="Call me"
          className="bg-orange"
          arrow="arrow-right"
          type="submit"
          onClick={handleSubmit}
          disabled={!isFormValid}
        />
        <InputCheckbox
          onBlur={(event) => blurHandler(event)}
          onChange={checkboxHandler}
          isChecked={isChecked}
          isCheckedBlur={isCheckedBlur}
          isCheckedError={isCheckedError}
        />
      </form>
    </section>
  );
};

export { Form };
