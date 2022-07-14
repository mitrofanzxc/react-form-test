import { FC } from 'react';
import './Modal.scss';

export interface IModal {
  isModalActive: boolean;
  handleModal: () => void;
}

const Modal: FC<IModal> = ({ isModalActive, handleModal }) => {
  return (
    <>
      <div className={`shadow ${isModalActive ? 'shadow_active' : ''}`} onClick={handleModal} />
    </>
  );
};

export { Modal };
