import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryGridEL = document.querySelector('.gallery');
// Создаем элементы 
const galleryMarkup = galleryItems 
   
    .map (({preview, original, description}) => 
    
        ` <li>
        <a class="gallery__item" href="${original}">
        <img 
            class="gallery__image" 
            src="${preview}"
            alt="${description}" />
        </a> </li>
        `
    )
    .join ('');

// Добавляем элементы в верстку

galleryGridEL.insertAdjacentHTML('beforeend', galleryMarkup);

// Устанавливаем прослушивателя события на клик по картинке 

galleryGridEL.addEventListener('click', onClickPicture);

function onClickPicture (e) {
    if (e.target.nodeName !== "IMG") { 
        return;
      };

// Инициализация библиотеки при клике + параметры подписей

    let lightbox = new SimpleLightbox('.gallery a', {
        captions: true,
        captionsData: "alt",
        captionDelay: 250,
    });
    
}

console.log(galleryItems);
