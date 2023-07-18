import React from "react";
import { Link } from "react-router-dom";

function AuthForm({name}) {
  console.log(name);
  return (
    <div className="authorization">
        <h2 className="authorization__title">{ name === "sign-up" ? "Регистрация" : "Вход" }</h2>
        <form className="authorization__form">
            <input className="authorization__input authorization__input_type_email" placeholder="Email" type="text"></input>
            <input className="authorization__input authorization__input_type_password" placeholder="Пароль"></input>
            <button className="authorization__submit-button">{ name === "sign-up" ? "Зарегистрироваться" : "Войти" }</button>
            {name === "sign-up" && <p className="authorization__auth-redirect">Уже зарегистрированы? <Link className="authorization__auth-redirect" to="/sign-in">Войти</Link></p>}
        </form>
    </div>
  );
}

export default AuthForm;
