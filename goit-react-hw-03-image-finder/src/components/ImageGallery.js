// src/components/ImageGallery/ImageGallery.js
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ImageGalleryItem from './ImageGalleryItem';

const Gallery = styled.ul `
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0;
  margin: 0;
  list-style: none;
`;

function ImageGallery({ images, onImageClick }) {
    return ( <
        Gallery > {
            images.map(image => ( <
                ImageGalleryItem key = { image.id }
                image = { image }
                onClick = {
                    () => onImageClick(image.largeImageURL) }
                />
            ))
        } <
        /Gallery>
    );
}

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            webformatURL: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired,
        })
    ).isRequired,
    onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;