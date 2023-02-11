import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');

const cardsMarkup = galleryItems
    .map(({preview,original,description}) => 
        `<div class = "gallery__item">
            <a class = "gallery__link" href = "${original}">
                <img class = "gallery__image"
                    src = "${preview}"
                    data-source = "${original}"
                    alt = "${description}"/>
            </a><
        /div>`)
    .join("");

galleryEl.insertAdjacentHTML('afterbegin', cardsMarkup);

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
