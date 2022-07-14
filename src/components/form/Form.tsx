import { FC, useState, useEffect, FocusEvent, ChangeEvent, MouseEvent } from 'react';
import { PrimaryButton } from '../buttons';
import './Form.scss';

const Form: FC = () => {
  const [isPhone, setIsPhone] = useState<string>('');
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isPhoneBlur, setIsPhoneBlur] = useState<boolean>(false);
  const [isCheckedBlur, setIsCheckedBlur] = useState<boolean>(false);
  const [isPhoneError, setIsPhoneError] = useState<string>('Номер не может быть пустым.');
  const [isCheckedError, setIsCheckedError] = useState<string>('Вы должны принять условия.');
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
      setIsPhoneError('Некорректный номер.');
    } else {
      setIsPhoneError('');
    }
  };

  const checkboxHandler = () => {
    setIsChecked(!isChecked);
    if (isChecked) {
      setIsCheckedError('Вы должны принять условия.');
    } else {
      setIsCheckedError('');
    }
  };

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // modalEventHandler();
    setIsPhone('');
    setIsChecked(false);
    // handleIsToastOpen(true);
  };

  useEffect(() => {
    if (isPhoneError || isCheckedError) {
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
    }
  }, [isPhoneError, isCheckedError]);

  return (
    <div className="modal__container">
      <h2 className="h2">
        Быстро
        <br />
        оставить заявку
      </h2>
      <p>Введите номер, мы позвоним вам в течение 10 минут в рабочее время</p>
      <p>Пн–Пт 9:00 - 18:00, Сб 10:00 - 18:00</p>
      <form className="form">
        <label>
          Enter your phone number:
          <input
            type="tel"
            id="phone"
            name="phone"
            className="primary-button input-phone"
            placeholder="+7 ( _ _ _ ) _ _ - _ _ - _ _"
            onBlur={(event) => blurHandler(event)}
            onChange={(event) => phoneHandler(event)}
            value={isPhone}
          />
        </label>
        <div className="error-field">{isPhoneBlur && isPhoneError ? isPhoneError : ''}</div>
        <PrimaryButton
          description="Позвоните мне"
          className="bg-orange"
          arrow="arrow-right"
          type="submit"
          onClick={handleSubmit}
          disabled={!isFormValid}
        />
        <div className="checkbox__wrapper">
          <label className="container">
            <input
              type="checkbox"
              name="checkbox"
              onBlur={(event) => blurHandler(event)}
              onChange={checkboxHandler}
              checked={isChecked}
            />
            <span className="checkmark" />
          </label>
          <p className="checkbox__info">
            Нажимая кнопку вы соглашаетесь с условиями <br />
            <strong className="medium color-orange">Политики конфиденциальности</strong>
          </p>
        </div>
        <div className="error-field">{isCheckedBlur && isCheckedError ? isCheckedError : ''}</div>
      </form>
      <button className="button-navigation button-navigation__close" />
    </div>
  );
};

export { Form };
