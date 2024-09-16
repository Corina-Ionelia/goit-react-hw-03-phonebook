// src/components/Searchbar/Searchbar.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Header = styled.header `
  width: 100%;
  background-color: #f5f5f5;
  padding: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form `
  display: flex;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
`;

const Input = styled.input `
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #4caf50;
  }
`;

const Button = styled.button `
  background-color: #4caf50;
  border: none;
  padding: 10px 20px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  margin-left: 10px;

  &:hover {
    background-color: #45a049;
  }
`;

function Searchbar({ onSubmit }) {
    const [query, setQuery] = useState('');

    const handleChange = event => {
        setQuery(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        onSubmit(query);
        setQuery('');
    };

    return ( <
        Header >
        <
        Form onSubmit = { handleSubmit } >
        <
        Input type = "text"
        value = { query }
        onChange = { handleChange }
        placeholder = "Search images and photos" /
        >
        <
        Button type = "submit" > Search < /Button> <
        /Form> <
        /Header>
    );
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;