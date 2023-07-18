import React from "react";
import logoImage from "../images/header-logo.svg";
import { Link } from "react-router-dom";

function Header({name, userData}) {
  console.log(name);
  return (
    <header className={"header header_login"}>
      <img className="header__logo" src={logoImage} alt="Лого сайта" />
      { name === 'sign-up' && <Link className={"header__link"} to="/sign-in">Войти</Link> }
      { name === 'sign-in' && <Link className={"header__link"} to="/sign-up">Регистрация</Link> }
      { name === 'main' && <div style={{display: "flex"}}>
        <p className="header__user-email">tutbudetemail@yandex.ru</p>
        && <Link className={"header__link"} to="/sign-in">Выйти</Link>
      </div> }
      </header>
  );
}

export default Header;
