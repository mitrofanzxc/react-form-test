import { FC } from 'react';
import { IPrimaryButton } from '../../../shared/types';
import './PrimaryButton.scss';

const PrimaryButton: FC<IPrimaryButton> = ({
  description,
  className,
  arrow,
  onClick,
  disabled,
}) => {
  return (
    <button
      className={`primary-button ${className ? className : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      <h3 className="h3">{description}</h3>
      <div className={`arrow ${arrow}`} />
    </button>
  );
};

export { PrimaryButton };
