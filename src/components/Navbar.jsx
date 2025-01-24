import React, { useState } from "react";
import { NavbarContainer, ThemeButton, Logo } from "./Navbar.styles"; // Importa el estilo del logo
import logo from "../assets/logoOfi.png";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <NavbarContainer>
      <Logo src={logo} alt="Ico" />
      <ThemeButton onClick={toggleDarkMode}>
        {darkMode ? "Modo Claro" : "Modo Oscuro"}
      </ThemeButton>
    </NavbarContainer>
  );
};

export default Navbar;
