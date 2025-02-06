import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
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
  const [isReferred, setIsReferred] = useState(false);
  const [images, setImages] = useState([]);
  const [imageNames, setImageNames] = useState([]); // Estado para los nombres de las imágenes
  const referees = ["Mariano Cardozo", "Manuel Castellano", "Candela Ortiz", "Franco Gomez", "Jonatan Rodriguez"];

  const handleReferredChange = (e) => {
    setIsReferred(e.target.value === "Si");
  };

  const adjustTextareaHeight = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const handleImageUpload = async (e) => {
    const files = e.target.files;
    if (files.length + images.length > 3) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Solo puedes subir un máximo de 3 imágenes.",
        confirmButtonText: "Aceptar",
      });
      return;
    }

    const uploadedImages = [];
    const uploadedImageNames = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "Formulario"); // Reemplaza con tu upload preset

      try {
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/drx3naywk/image/upload`, // Reemplaza con tu cloud name
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await response.json();
        uploadedImages.push(data.secure_url);
        uploadedImageNames.push(file.name); // Guarda el nombre del archivo
      } catch (error) {
        console.error("Error uploading image: ", error);
      }
    }
    setImages([...images, ...uploadedImages]);
    setImageNames([...imageNames, ...uploadedImageNames]);
  };

  const removeImage = (index) => {
    const newImages = [...images];
    const newImageNames = [...imageNames];
    newImages.splice(index, 1);
    newImageNames.splice(index, 1);
    setImages(newImages);
    setImageNames(newImageNames);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Convierte el array de imágenes a una cadena separada por comas
    const imagesString = images.length > 0 ? images.join(", ") : "No se subieron imágenes";

    const formData = {
      name: form.current.name.value,
      phone: form.current.phone.value,
      subject: form.current.subject.value,
      description: form.current.description.value,
      referred: form.current.referred.value,
      referee: isReferred ? form.current.referee.value : "No aplica",
      images: imagesString, // Envía las imágenes como una cadena de texto
    };

    emailjs
      .send(
        "service_cutqcq9", // Reemplaza con tu Service ID
        "template_t9agwr8", // Reemplaza con tu Template ID
        formData, // Envía el objeto formData
        "u1-Ssnaw3HN6F0Nvm" // Reemplaza con tu User ID
      )
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "¡Mensaje enviado!",
            text: "Tu mensaje se envió correctamente. Nos pondremos en contacto contigo pronto.",
            confirmButtonText: "Aceptar",
          });
          form.current.reset();
          setIsReferred(false);
          setImages([]);
          setImageNames([]);
        },
        () => {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Ocurrió un error al enviar tu mensaje. Por favor, intenta nuevamente.",
            confirmButtonText: "Aceptar",
          });
        }
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
            <option value="Laboral">Laboral</option>
            <option value="Inmueble">Inmueble</option>
            <option value="Familiar">Familiar</option>
            <option value="Automotor">Automotor</option>
            <option value="Penal">Penal</option>
            <option value="Otro">Otro</option>
          </StyledSelect>
        </div>
        <div className="input-container">
          <StyledLabel htmlFor="description">Descripción del Caso:</StyledLabel>
          <StyledTextarea
            name="description"
            id="description"
            placeholder="Escribe aquí los detalles de tu caso"
            required
            onInput={adjustTextareaHeight}
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
            <option value="No">No</option>
            <option value="Si">Sí</option>
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
        <div className="input-container">
          <StyledLabel htmlFor="images">Agrega imágenes (opcional) (máximo 3):</StyledLabel>
          <StyledInput
            type="file"
            name="images"
            id="images"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
          />
          {/* Lista de nombres de imágenes con botón para eliminar */}
          <div className="container-img">
            {imageNames.map((name, index) => (
              <div
                className="container-list"
                key={index}
              >
                <span className="img-span">{name}</span>
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  style={{
                    marginLeft: "15px",
                    background: "red",
                    color: "white",
                    border: "none",
                    borderRadius: "50%",
                    cursor: "pointer",
                    width: "23px",
                    height: "23px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>
        <SubmitButton type="submit">Enviar</SubmitButton>
      </StyledForm>
    </FormContainer>
  );
};

export default Form;