// src/components/ContactForm/ContactForm.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'; // Importăm styled-components

// Definim componentele stilizate
const Form = styled.form `
  margin-bottom: 20px;
`;

const Input = styled.input `
  margin-right: 10px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: #4caf50;
  }
`;

const Button = styled.button `
  padding: 5px 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

function ContactForm({ onAddContact }) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddContact(name, number);
        setName('');
        setNumber('');
    };

    return ( <
        Form onSubmit = { handleSubmit } >
        <
        Input type = "text"
        value = { name }
        onChange = {
            (e) => setName(e.target.value) }
        placeholder = "Name" /
        >
        <
        Input type = "text"
        value = { number }
        onChange = {
            (e) => setNumber(e.target.value) }
        placeholder = "Phone number" /
        >
        <
        Button type = "submit" > Add Contact < /Button> <
        /Form>
    );
}

ContactForm.propTypes = {
    onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;