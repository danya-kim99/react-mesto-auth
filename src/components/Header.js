import React from "react";
import logoImage from "../images/header-logo.svg";
import { Link } from "react-router-dom";

function Header({email, name}) {
  function signOut(){
    localStorage.removeItem('token'); //react-router-dom версии 6 и более не поддерживает хук useHistory, поэтому просто делаю редирект по ссылке
  }
  return (
    <header className={"header header_login"}>
      <img className="header__logo" src={logoImage} alt="Лого сайта" />
      { name === 'sign-up' && <Link className={"header__link"} to="/sign-in">Войти</Link> }
      { name === 'sign-in' && <Link className={"header__link"} to="/sign-up">Регистрация</Link> }
      { name === 'main' && <div style={{display: "flex"}}>
        <p className="header__user-email">{email}</p>
        && <Link className={"header__link"} onClick={signOut} to="sign-in">Выйти</Link>
      </div> }
      </header>
  );
}

export default Header;
