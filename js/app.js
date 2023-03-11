// Открытие модалки по ID
const showModalOnClick = event => {
  const modalId = event.target.dataset.modalId

  document.getElementById(modalId).classList.add('active')
  document.querySelector('body').classList.add('no-scroll')
}

document.querySelectorAll('button[data-modal-id]').forEach(
  selector => selector.addEventListener('click', showModalOnClick)
)

// Закрытие модалки
const closeModalOnClick = event => {
  const modalId = event.target.closest('.modal[id]').id

  document.getElementById(modalId).classList.remove('active')
  document.querySelector('body').classList.remove('no-scroll')
}

document.querySelectorAll('[data-on-click-close-modal]').forEach(
  selector => selector.addEventListener('click', closeModalOnClick)
)

