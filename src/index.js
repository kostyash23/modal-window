import css from './style.css';
const btn = document.querySelector('#btn');
const modal = document.querySelector('#modal');
const btnClose = document.querySelector('#btn-close');
const btnCancel = document.querySelector('#btn-cancel');
const btnUninstall = document.querySelector('#btn-uninstall');
const overlay = document.querySelector('#overlay');

function openModal() {
  modal.classList.add('active');
  overlay.classList.add('active');
}
function closeModal() {
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

btn.addEventListener('click', openModal);
btnClose.addEventListener('click', closeModal);
btnCancel.addEventListener('click', closeModal);
btnUninstall.addEventListener('click', () => {
  closeModal();
  alert('DONE');
});
window.addEventListener('click', e => {
  if (e.target === overlay) {
    closeModal();
  }
});

document.body.addEventListener('keyup', function (e) {
  if (e.keyCode == 27) {
    closeModal();
  }
});
