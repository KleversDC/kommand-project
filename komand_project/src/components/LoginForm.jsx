import React from "react";
import googleIcon from "../assets/search.png";

function LoginForm({ switchToRegister, dark }) {
  return (
    <div className={`form-container ${dark ? "dark" : ""} fade-slide`}>
      <h2 className="form-title">Вхід</h2>

      <input type="email" placeholder="Email" className="form-input" />
      <input type="password" placeholder="Пароль" className="form-input" />

      <button className="primary-btn">Увійти</button>
      <button className="google-btn">
        <img src={googleIcon} alt="Google" className="google-icon" />
        Увійти через Google
      </button>

      <p className="switch">
        Нема акаунта?{" "}
        <span className="link" onClick={switchToRegister}>
          Зареєструватися
        </span>
      </p>
    </div>
  );
}

export default LoginForm;
