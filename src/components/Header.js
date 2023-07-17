import React from "react";
import logoImage from "../images/header-logo.svg";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logoImage} alt="Лого сайта" />
    </header>
  );
}

export default Header;
