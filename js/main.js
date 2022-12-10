const elHeroBtn = document.querySelector('.hero-btn');
const elModal = document.querySelector('.modal');
const elModalClose = document.querySelector('.js-modal-close');

elHeroBtn.addEventListener('click', function() {
  elModal.classList.add('modal--open');
});

elModalClose.addEventListener('click', function() {
  elModal.classList.remove('modal--open');
})
