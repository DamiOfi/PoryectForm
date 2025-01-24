import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --primary: 0 100% 27%;
    --primary-foreground: 210 40% 98%;
    --radius: 0.5rem;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: hsl(var(--background));
    color: hsl(var(--foreground));
    animation: fadeIn 1s ease-in-out; /* Aplica la animación */
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
  }

  h1, h2 {
    margin: 0;
  }
`;
