import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');

const cardsMarkup = galleryItems
    .map(({ preview, original, description }) => {
        return `
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        `;
        })
    .join('');

galleryEl.insertAdjacentHTML('afterbegin', cardsMarkup);

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
