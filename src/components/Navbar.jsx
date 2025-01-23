import { useState } from 'react';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-primary text-white">
      <h1 className="text-xl font-bold">Estudio Jurídico</h1>
      <button
        onClick={toggleDarkMode}
        className="bg-secondary px-4 py-2 rounded hover:bg-dark transition"
      >
        {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
      </button>
    </nav>
  );
};

export default Navbar;
