import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa"; // Font Awesome Icons

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const theme = isDark ? "dark" : "light";
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [isDark]);

  return (
    <button onClick={() => setIsDark(!isDark)} className="theme-toggle" data-aos="flip-left">
      {isDark ? (
        <>
          <FaSun style={{ marginRight: "8px" }} />
          Light Mode
        </>
      ) : (
        <>
          <FaMoon style={{ marginRight: "8px" }} />
          Dark Mode
        </>
      )}
    </button>
  );
};

export default ThemeToggle;
