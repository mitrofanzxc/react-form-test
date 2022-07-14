import { FC, useState, useEffect, FocusEvent, ChangeEvent, MouseEvent } from 'react';
import { createPortal } from 'react-dom';
import { InputCheckbox } from './inputCheckbox/InputCheckbox';
import { InputTel } from './inputTel/InputTel';
import { PrimaryButton } from '../buttons';
import { Modal } from '../modal/Modal';
import './Form.scss';

const Form: FC = () => {
  const CONTAINER = document.querySelector('#root') as HTMLDivElement;

  const [isPhone, setIsPhone] = useState<string>('');
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isPhoneBlur, setIsPhoneBlur] = useState<boolean>(false);
  const [isCheckedBlur, setIsCheckedBlur] = useState<boolean>(false);
  const [isPhoneError, setIsPhoneError] = useState<string>('The field cannot be empty.');
  const [isCheckedError, setIsCheckedError] = useState<string>('You must accept the terms.');
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [isFormSend, setIsFormSend] = useState<boolean>(false);

  const blurHandler = (event: FocusEvent<HTMLInputElement>) => {
    const NAME = event.currentTarget.name;
    switch (NAME) {
      case 'tel':
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

  const sendFormData = () => {
    const XHR = new XMLHttpRequest();
    const FORM = document.querySelector('.form') as HTMLFormElement;
    const FORM_DATA = new FormData(FORM);

    XHR.addEventListener('load', (event) => {
      const target = event.target as XMLHttpRequest;
      console.log('target.responseText ===', target.responseText);
      setIsFormSend(true);
    });

    XHR.addEventListener('error', (event) => {
      console.log('Oops! Something went wrong.');
      setIsFormSend(false);
    });

    XHR.open('POST', 'https://example.com/cors.php');
    XHR.send(FORM_DATA);
  };

  const handleModal = () => {
    setIsModalActive(!isModalActive);
  };

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    sendFormData();
    handleModal();
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
    <>
      <section className="form-wrapper">
        <h2 className="h2">Leave a request quickly!</h2>
        <p>Enter the number, we will call you within 10 minutes during work hours:</p>
        <p>
          <span className="fw-medium">Mon – Fri:&nbsp;</span>9:00 - 18:00,{' '}
          <span className="fw-medium">Sat:&nbsp;</span>10:00 - 18:00.
        </p>
        <form data-testid="form" method="post" className="form">
          <InputTel
            onBlur={(event) => blurHandler(event)}
            onChange={(event) => phoneHandler(event)}
            isPhone={isPhone}
            isPhoneBlur={isPhoneBlur}
            isPhoneError={isPhoneError}
          />
          <PrimaryButton
            type="submit"
            description="Call me"
            arrow="arrow-right"
            className="bg-orange"
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
      {createPortal(
        <Modal isModalActive={isModalActive} handleModal={handleModal} isFormSend={isFormSend} />,
        CONTAINER
      )}
    </>
  );
};

export { Form };
