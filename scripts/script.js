const searchLink = document.querySelector('.search-link');
const modal = document.querySelector('.modal-container');
const closeButton = document.querySelector('.modal-close-button');

searchLink.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.classList.remove('hidden');
});

closeButton.addEventListener('click', () => {
  modal.classList.add('hidden');
});
