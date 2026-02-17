import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const [dark, setDark] = useState(false);
  const toggleTheme = () => setDark(!dark);

  // Дані товарів
  const products = [
    { title: "Ноутбук LX", image: "https://via.placeholder.com/150x100" },
    { title: "Смартфон ZX", image: "https://via.placeholder.com/150x100" },
    { title: "Навушники Pro", image: "https://via.placeholder.com/150x100" },
    { title: "Гаджет Max", image: "https://via.placeholder.com/150x100" },
  ];

  return (
    <div className={dark ? "app dark" : "app"}>
      {/* Шапка */}
      <Header />

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
    </div>
  );
}

export default App;
