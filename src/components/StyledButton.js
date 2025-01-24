import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: var(--primary);
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: hsl(var(--primary-foreground));
    transform: scale(1.05); /* Hace que el botón crezca ligeramente */
  }

  &:disabled {
    background-color: grey;
    cursor: not-allowed;
  }
`;
