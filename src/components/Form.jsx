import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { StyledButton } from './StyledButton';
import {
  FormContainer,
  FormTitle,
  StyledForm,
  StyledInput,
  StyledTextarea,
  SubmitButton,
} from "./Form.styles";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cutqcq9",
        "template_t9agwr8",
        form.current,
        "u1-Ssnaw3HN6F0Nvm"
      )
      .then(
        () => alert("Mensaje enviado correctamente!"),
        () => alert("Ocurrió un error, intenta nuevamente.")
      );
  };

  return (
    <FormContainer>
      <FormTitle>Contáctanos</FormTitle>
      <StyledForm ref={form} onSubmit={sendEmail}>
        <StyledInput type="text" name="name" placeholder="Nombre y Apellido" required />
        <StyledInput type="tel" name="phone" placeholder="Número de Teléfono" required />
        <StyledInput type="text" name="subject" placeholder="Tema" required />
        <StyledTextarea name="description" placeholder="Descripción del Caso" required />
        <StyledButton type="submit">
          Enviar
        </StyledButton>
      </StyledForm>
    </FormContainer>
  );
};

export default Form;
