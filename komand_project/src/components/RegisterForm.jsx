import React from "react";

function RegisterForm({ switchToLogin, dark }) {
  return (
    <div className={`form-container ${dark ? "dark" : ""} fade-slide`}>
      <h2 className="form-title">Реєстрація</h2>

      <input type="text" placeholder="Ім'я" className="form-input" />
      <input type="email" placeholder="Email" className="form-input" />
      <input type="password" placeholder="Пароль" className="form-input" />

      <button className="primary-btn">Зареєструватися</button>

      <p className="switch">
        Вже є акаунт?{" "}
        <span className="link" onClick={switchToLogin}>
          Увійти
        </span>
      </p>
    </div>
  );
}

export default RegisterForm;
