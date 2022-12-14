const elHeroBtn = document.querySelector('.hero-btn');
const elModal = document.querySelector('.modal');
const elModalClose = document.querySelector('.js-modal-close');

elHeroBtn.addEventListener('click', function() {
  elModal.classList.add('modal--open');
});

elModalClose.addEventListener('click', function() {
  elModal.classList.remove('modal--open');
})

// *****
const elHamburgerBtn = document.querySelector('.js-hamburger-btn');
const elSitenav = document.querySelector('.sitenav');
const elSitenavClose = document.querySelector('.js-sitenav-close');

elHamburgerBtn.addEventListener('click', function() {
  elSitenav.classList.add('sitenav--open');
  elSitenavClose.classList.add('sitenav--open');
})

elSitenavClose.addEventListener('click', function() {
  elSitenav.classList.remove('sitenav--open')
})