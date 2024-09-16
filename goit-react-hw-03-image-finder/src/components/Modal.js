// src/components/Modal/Modal.js
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Overlay = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div `
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 90%;
  max-height: 80%;
`;

const Img = styled.img `
  width: 100%;
  height: auto;
`;

function Modal({ imageUrl, onClose }) {
    useEffect(() => {
        const handleKeyDown = event => {
            if (event.code === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    const handleOverlayClick = event => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return ( <
        Overlay onClick = { handleOverlayClick } >
        <
        ModalContent >
        <
        Img src = { imageUrl }
        alt = "" / >
        <
        /ModalContent> <
        /Overlay>
    );
}

Modal.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Modal;