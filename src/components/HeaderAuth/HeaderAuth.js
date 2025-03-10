import React from "react";
import "./HeaderAuth.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/logo.svg";
import account from "../../images/account.svg"
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function HeaderAuth() {
  const location = useLocation();
  
  return(
    <header className={`header__auth ${location.pathname === "/" ? 'header__auth-grey':''}`}>
      <div className="header__auth-container"> 
        <Link to="/" className="header__auth-logo">
          <img src={logo} alt="логотип" />
        </Link>
        <BurgerMenu />
        <div className="header__button-box_films">
          <Link to="/movies" className="header__button-films">
            Фильмы
          </Link>
          <Link to="/saved-movies" className="header__button-savefilms">
            Сохранённые фильмы
          </Link>
          <Link to="/profile" className="header__account-button">
            <img src={account} alt="аккаунт" />
            Аккаунт
          </Link>
        </div>
      </div>
    </header>
  );
}

export default HeaderAuth;