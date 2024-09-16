// src/components/Button/Button.js
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LoadMoreButton = styled.button `
  display: block;
  width: 100%;
  max-width: 200px;
  margin: 20px auto;
  padding: 10px;
  background-color: #4caf50;
  border: none;
  color: white;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

function Button({ onClick, disabled }) {
    return ( <
        LoadMoreButton onClick = { onClick }
        disabled = { disabled } >
        Load More <
        /LoadMoreButton>
    );
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    disabled: false,
};

export default Button;