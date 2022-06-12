import React from "react";
import './styles.css'

export default function ImageGallery ({articles}) {
    return (
        <ul className="ImageGallery">
            {articles.map(({id,webformatURL}) => <li key={id} className="ImageGalleryItem">
                        <img src={webformatURL} alt="My favorite images"  className="ImageGalleryItem-image"/>
                    </li>)}
        </ul>
    )
}