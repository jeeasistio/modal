// selectors
const modal = document.querySelector('.modal');
const modalBtn = document.querySelector('.modal-btn');
const closeBtn = document.querySelector('.x');

// functions
const openModal = () => {
  modal.style.display = 'flex'
};
const closeModal = () => {
  modal.style.display = 'none'
};
const clickOutside = e => {
  if (e.target === modal) closeModal();
}

// listeners
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', clickOutside);