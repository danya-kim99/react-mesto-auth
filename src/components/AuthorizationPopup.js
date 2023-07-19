import React from "react";

function AuthorizationPopup({isOpen, onClose}) {
  return (
    <div className={`popup popup_type_authorization ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container popup__container_authorization">
        <div className={`popup__authorization-status ${true ? "popup__authorization-status_success" : "popup__authorization-status_failed"}`}/>
        <h2 className="popup__title_authorization">{true? "Вы успешно зарегистрировались!" : "Загружаем..."}</h2>
        <button
          type="button"
          className="popup__close-button popup__close-button_authorization"
          onClick={onClose}
        />
      </div>
    </div>
  );
}

export default AuthorizationPopup;
