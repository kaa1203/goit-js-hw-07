import { galleryItems } from './gallery-items.js';
// Change code below this line

const ul = document.querySelector(".gallery");

galleryItems.forEach(item => {
    const { description, original, preview} = item;
    let li = `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}"/>
            </a>
        </li>
    `;
    ul.innerHTML += li;
});

var bigPicture = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });

bigPicture.on("show.simplelightbox");
