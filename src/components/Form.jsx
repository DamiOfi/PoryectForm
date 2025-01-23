import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

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
        (result) => {
          alert('Mensaje enviado correctamente!');
        },
        (error) => {
          alert('Ocurrió un error, intenta nuevamente.');
        }
      );
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded dark:bg-dark">
      <h2 className="text-2xl font-semibold text-primary text-center mb-4">
        Contáctanos
      </h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Nombre y Apellido"
          required
          className="w-full p-2 border border-gray-300 rounded dark:bg-secondary"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Número de Teléfono"
          required
          className="w-full p-2 border border-gray-300 rounded dark:bg-secondary"
        />
        <input
          type="text"
          name="subject"
          placeholder="Tema"
          required
          className="w-full p-2 border border-gray-300 rounded dark:bg-secondary"
        />
        <textarea
          name="description"
          placeholder="Descripción del Caso"
          required
          className="w-full p-2 border border-gray-300 rounded dark:bg-secondary"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded hover:bg-dark transition"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Form;
