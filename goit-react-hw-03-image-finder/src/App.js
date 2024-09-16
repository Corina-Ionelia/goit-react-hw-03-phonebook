// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Loader from './components/Loader/Loader';
import Modal from './components/Modal/Modal';

const API_KEY = 'your_pixabay_api_key';
const BASE_URL = 'https://pixabay.com/api/';

function App() {
    const [images, setImages] = useState([]);
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [modalImage, setModalImage] = useState(null);

    useEffect(() => {
        if (query === '') return;

        const fetchImages = async() => {
            setLoading(true);
            try {
                const response = await axios.get(`${BASE_URL}`, {
                    params: {
                        q: query,
                        page,
                        key: API_KEY,
                        image_type: 'photo',
                        orientation: 'horizontal',
                        per_page: 12,
                    },
                });

                setImages(prevImages => [...prevImages, ...response.data.hits]);
            } catch (error) {
                console.error('Error fetching images:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, [query, page]);

    const handleSearchSubmit = searchQuery => {
        setQuery(searchQuery);
        setPage(1);
        setImages([]);
    };

    const handleLoadMore = () => {
        setPage(prevPage => prevPage + 1);
    };

    const handleImageClick = imageUrl => {
        setModalImage(imageUrl);
    };

    const handleCloseModal = () => {
        setModalImage(null);
    };

    return ( <
            div >
            <
            Searchbar onSubmit = { handleSearchSubmit }
            /> <
            ImageGallery images = { images }
            onImageClick = { handleImageClick }
            /> { loading && < Loader / > } {
                images.length > 0 && < Button onClick = { handleLoadMore }
                />} {
                    modalImage && < Modal imageUrl = { modalImage }
                    onClose = { handleCloseModal }
                    />} <
                    /div>
                );
            }

            export default App;