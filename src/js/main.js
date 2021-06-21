import images from './gallery'

const ul = document.querySelector('ul');

const galeryImages = createdImagesCards(images);

ul.insertAdjacentHTML('beforeend', galeryImages);

function createdImagesCards(img) {
    return img.map(({ original, preview, description }) => {

        return `<li class="gallery__item">
        <a
          class="gallery__link"
          href="${original}"
        >
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            width="392"
            height="240"
          />
        </a>
      </li>`;
    }).join('');

};

const ulContainer = document.querySelector("ul.js-gallery");
const imgItems = document.querySelectorAll(".gallery__item");
const modal = document.querySelector('div.lightbox');
const buttonCloseModal = document.querySelector('button');
const modalImg = document.querySelector('.lightbox__image');
const overlayContainer = document.querySelector('.lightbox__overlay');


ulContainer.addEventListener('click', openModal);
ulContainer.addEventListener('click', addBigImag);

function openModal(evt) {
    evt.preventDefault();
    if (!evt.target.src) {
        return
    }
    modal.classList.add('is-open');

};

function addBigImag(e) {
    modalImg.src = e.target.dataset.source;
    modalImg.alt = e.target.alt;
}

buttonCloseModal.addEventListener('click', closeModal);
overlayContainer.addEventListener('click', closeModal);

function closeModal() {
    modal.classList.remove('is-open');
    modalImg.src = " ";
}