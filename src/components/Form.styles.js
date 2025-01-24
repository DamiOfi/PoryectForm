import styled from "styled-components";

export const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 24px;
  background-color: hsl(var(--card));
  border-radius: var(--radius);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const FormTitle = styled.h2`
  text-align: center;
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const StyledInput = styled.input`
  padding: 8px;
  font-size: 1rem;
  border: 1px solid hsl(var(--border));
  border-radius: var(--radius);
  &:focus {
    outline: none;
    border-color: hsl(var(--primary));
  }
`;

export const StyledTextarea = styled.textarea`
  padding: 8px;
  font-size: 1rem;
  border: 1px solid hsl(var(--border));
  border-radius: var(--radius);
  &:focus {
    outline: none;
    border-color: hsl(var(--primary));
  }
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: hsl(var(--primary-foreground));
  background-color: hsl(var(--primary));
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
  &:hover {
    background-color: hsl(var(--primary), 0.9);
  }
  &:disabled {
    background-color: hsl(var(--muted));
    cursor: not-allowed;
  }
`;
