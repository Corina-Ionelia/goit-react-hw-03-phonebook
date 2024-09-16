// src/components/Filter/Filter.js
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Componente stilizate
const Label = styled.label `
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
`;

const Input = styled.input `
  width: 100%;
  padding: 5px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: #4caf50;
  }
`;

function Filter({ value, onChange }) {
    return ( <
        div >
        <
        Label htmlFor = "filter" > Find contacts by name < /Label> <
        Input type = "text"
        id = "filter"
        value = { value }
        onChange = { onChange }
        placeholder = "Search contacts" /
        >
        <
        /div>
    );
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Filter;