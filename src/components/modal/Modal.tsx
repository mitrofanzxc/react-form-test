import { FC, useEffect } from 'react';
import { IModal } from '../../shared/types';
import loadingSuccessGif from '../../images/modal/loading-success.gif';
import loadingFailGif from '../../images/modal/loading-fail.gif';
import './Modal.scss';

const Modal: FC<IModal> = ({ isModalActive, handleModal, isFormSend }) => {
  useEffect(() => {
    if (isModalActive) {
      setTimeout(() => {
        handleModal();
      }, 3000);
    }
  }, [isModalActive]);

  return (
    <>
      <div className={`shadow ${isModalActive ? 'shadow_active' : ''}`} onClick={handleModal} />
      <div className={`modal ${isModalActive ? 'modal_active' : ''}`}>
        <img src={isFormSend ? loadingSuccessGif : loadingFailGif} alt="" className="modal__gif" />
        <h2 className="h2">{isFormSend ? 'Loading Success!' : 'Loading Fail'}</h2>
      </div>
    </>
  );
};

export { Modal };
