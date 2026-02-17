import React from "react";
import "../styles/toggle.css";

function ThemeToggle({ dark, toggleTheme }) {
  return (
    <button className="toggle" onClick={toggleTheme}>
      {dark ? "🌞" : "🌙"}
    </button>
  );
}

export default ThemeToggle;
