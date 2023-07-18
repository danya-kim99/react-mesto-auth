import React from "react";
import logoImage from "../images/header-logo.svg";
import { Link } from "react-router-dom";

function Header({name}) {
  console.log(name);
  return (
    <header className={name === 'sign-up' || name === 'sign-in' ? "header header_login" : "header"}>
      <img className="header__logo" src={logoImage} alt="Лого сайта" />
      {name === 'sign-up' && <Link className={"header__link"} to="/sign-in">Войти</Link>}
      {name === 'sign-in' && <Link className={"header__link"} to="/sign-up">Регистрация</Link>}
      </header>
  );
}

export default Header;
