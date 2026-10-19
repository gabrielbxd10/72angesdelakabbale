const dialog = document.querySelector('#reader');
document.querySelectorAll('[data-sample]').forEach(button => button.addEventListener('click', () => {
  const image = document.querySelector('#reader-image');
  image.src = '/assets/upsell/sample-' + button.dataset.sample + '.webp';
  image.alt = button.querySelector('img').alt;
  document.querySelector('#reader-title').textContent = button.querySelector('strong').textContent;
  dialog.showModal(); document.body.classList.add('modal-open'); dialog.scrollTop = 0;
}));
document.querySelector('#close-reader').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => { if (e.target === dialog && (e.clientX < dialog.getBoundingClientRect().left || e.clientX > dialog.getBoundingClientRect().right || e.clientY < dialog.getBoundingClientRect().top || e.clientY > dialog.getBoundingClientRect().bottom)) dialog.close(); });
dialog.addEventListener('close', () => document.body.classList.remove('modal-open'));
