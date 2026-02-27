import React from "react";
import "../styles/header.css";

function Header({ onLoginClick, onRegisterClick, dark }) {
  return (
    <header className={`header ${dark ? "dark" : ""}`}>
      <div className="logo-container">
        <div className="logo-circle">LX</div>
        <div className="site-name">Komand Project</div>
      </div>

      {/* Кнопки праворуч */}
      <div className="header-buttons">
        <button className="header-btn" onClick={onLoginClick}>
          Логін
        </button>
        <button className="header-btn" onClick={onRegisterClick}>
          Реєстрація
        </button>
      </div>
    </header>
  );
}

export default Header;
