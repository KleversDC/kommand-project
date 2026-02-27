import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import ThemeToggle from "./components/ThemeToggle";

import Modal from "./components/Modal";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

function App() {
  const [dark, setDark] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("login"); // 'login' або 'register'

  const toggleTheme = () => setDark(!dark);

  const openLogin = () => {
    setModalType("login");
    setIsModalOpen(true);
  };
  const openRegister = () => {
    setModalType("register");
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  // Дані товарів
  const products = [
    { title: "Ноутбук LX", image: "data:image/jpeg;base64,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"},
    { title: "Смартфон ZX", image: "https://via.placeholder.com/150x100" },
    { title: "Навушники Pro", image: "https://via.placeholder.com/150x100" },
    { title: "Гаджет Max", image: "https://via.placeholder.com/150x100" },
  ];

  return (
    <div className={dark ? "app dark" : "app"}>
      {/* Шапка з кнопками */}
      <Header
        dark={dark}
        onLoginClick={openLogin}
        onRegisterClick={openRegister}
      />

      {/* Пошук */}
      <div className="search-wrapper">
        <input type="text" placeholder="Шукаєте товар?" />
        <button className="search-btn">🔍</button>
      </div>

      {/* Список товарів */}
      <div className="products">
        {products.map((p, i) => (
          <ProductCard key={i} title={p.title} image={p.image} />
        ))}
      </div>

      {/* Перемикач теми */}
      <ThemeToggle dark={dark} toggleTheme={toggleTheme} />

      {/* Модальне вікно */}
      <Modal isOpen={isModalOpen} onClose={closeModal} dark={dark}>
        {modalType === "login" ? (
          <LoginForm
            switchToRegister={() => setModalType("register")}
            dark={dark}
          />
        ) : (
          <RegisterForm
            switchToLogin={() => setModalType("login")}
            dark={dark}
          />
        )}
      </Modal>
    </div>
  );
}

export default App;
