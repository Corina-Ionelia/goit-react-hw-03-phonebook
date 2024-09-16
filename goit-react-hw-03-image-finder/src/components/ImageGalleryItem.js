// src/components/ImageGallery/ImageGalleryItem.js
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListItem = styled.li `
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const Img = styled.img `
  width: 100%;
  display: block;
`;

function ImageGalleryItem({ image, onClick }) {
    return ( <
        ListItem onClick = { onClick } >
        <
        Img src = { image.webformatURL }
        alt = "" / >
        <
        /ListItem>
    );
}

ImageGalleryItem.propTypes = {
    image: PropTypes.shape({
        id: PropTypes.string.isRequired,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;