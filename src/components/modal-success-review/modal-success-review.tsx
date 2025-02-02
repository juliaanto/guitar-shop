import { Key } from '../../const';
import { useEffect } from 'react';

type ModalSuccessReviewProps = {
  onCloseClick: () => void;
}

function ModalSuccessReview(props: ModalSuccessReviewProps): JSX.Element {
  const {onCloseClick} = props;

  const handleEscClick = (event: { key: string; }) => {
    if (event.key === Key.Escape) {
      onCloseClick();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEscClick);
    return () => {
      window.removeEventListener('keydown', handleEscClick);
    };
  });

  return (
    <div className="modal is-active modal--success modal-for-ui-kit">
      <div className="modal__wrapper">
        <div
          className="modal__overlay"
          data-close-modal
          onClick={onCloseClick}
        >
        </div>
        <div className="modal__content">
          <svg className="modal__icon" width="26" height="20" aria-hidden="true">
            <use xlinkHref="#icon-success"></use>
          </svg>
          <p className="modal__message">Спасибо за ваш отзыв!</p>
          <div className="modal__button-container modal__button-container--review">
            <button
              className="button button--small modal__button modal__button--review"
              onClick={onCloseClick}
            >К покупкам!
            </button>
          </div>
          <button
            className="modal__close-btn button-cross"
            type="button"
            aria-label="Закрыть"
            onClick={onCloseClick}
          ><span className="button-cross__icon"></span><span className="modal__close-btn-interactive-area"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalSuccessReview;
