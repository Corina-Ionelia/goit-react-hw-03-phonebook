// src/components/Loader/Loader.js
import React from 'react';
import { ThreeDots } from 'react-loader-spinner'; // Poți folosi altă bibliotecă de loader

function Loader() {
    return ( <
        div style = {
            { display: 'flex', justifyContent: 'center', padding: '20px' } } >
        <
        ThreeDots color = "#4caf50"
        height = { 80 }
        width = { 80 }
        /> <
        /div>
    );
}

export default Loader;