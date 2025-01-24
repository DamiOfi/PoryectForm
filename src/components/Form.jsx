import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { StyledButton } from "./StyledButton";
import {
  FormContainer,
  FormTitle,
  StyledForm,
  StyledInput,
  StyledTextarea,
  StyledSelect,
  StyledLabel,
  SubmitButton,
} from "./Form.styles";

const Form = () => {
  const form = useRef();
  const [isReferred, setIsReferred] = useState(false); // Estado para mostrar u ocultar el campo de referido
  const referees = ["Mariano Cardozo", "Manuel Castellano", "Candela Ortiz", "Franco Gomez", "Jonatan Rodriguez"]; // Opciones de referidos

  const handleReferredChange = (e) => {
    setIsReferred(e.target.value === "yes");
  };

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
        <div className="input-container">
          <StyledLabel htmlFor="name">Nombre y Apellido:</StyledLabel>
          <StyledInput
            type="text"
            name="name"
            id="name"
            placeholder="Ej: Juan Pérez"
            required
          />
        </div>
        <div className="input-container">
          <StyledLabel htmlFor="phone">Número de Teléfono:</StyledLabel>
          <StyledInput
            type="tel"
            name="phone"
            id="phone"
            placeholder="Ej: 1123234545"
            required
          />
        </div>
        <div className="input-container">
          <StyledLabel htmlFor="subject">Tema:</StyledLabel>
          <StyledSelect
            name="subject"
            id="subject"
            required
            placeholder="Selecciona un tema"
          >
            <option value="-">-</option>
            <option value="laboral">Laboral</option>
            <option value="inmueble">Inmueble</option>
            <option value="familiar">Familiar</option>
            <option value="automotor">Automotor</option>
          </StyledSelect>
        </div>
        <div className="input-container">
          <StyledLabel htmlFor="description">Descripción del Caso:</StyledLabel>
          <StyledTextarea
            name="description"
            id="description"
            placeholder="Escribe aquí los detalles de tu caso"
            required
          />
        </div>
        <div className="input-container">
          <StyledLabel htmlFor="referred">¿Referido de alguien?</StyledLabel>
          <StyledSelect
            name="referred"
            id="referred"
            onChange={handleReferredChange}
            required
          >
            <option value="no">No</option>
            <option value="yes">Sí</option>
          </StyledSelect>
        </div>
        {isReferred && (
          <div className="input-container">
            <StyledLabel htmlFor="referee">¿De quién?</StyledLabel>
            <StyledSelect name="referee" id="referee" required>
              <option value="">Selecciona una opción</option>
              {referees.map((referee, index) => (
                <option key={index} value={referee}>
                  {referee}
                </option>
              ))}
            </StyledSelect>
          </div>
        )}
        <SubmitButton type="submit">Enviar</SubmitButton>
      </StyledForm>
    </FormContainer>
  );
};

export default Form;
