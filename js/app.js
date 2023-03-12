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

function getTextNodesIn(elem, opt_fnFilter) {
  var textNodes = [];
  if (elem) {
    for (var nodes = elem.childNodes, i = nodes.length; i--;) {
      var node = nodes[i],
        nodeType = node.nodeType;
      if (nodeType == 3) {
        if (!opt_fnFilter || opt_fnFilter(node, elem)) {
          if (node.data.trim() !== '') {
            textNodes.push(node.data.trim() !== '' ? node : '');

          }
        }
      } else if (nodeType == 1 || nodeType == 9 || nodeType == 11) {
        textNodes = textNodes.concat(getTextNodesIn(node, opt_fnFilter));
      }
    }
  }
  return textNodes;
}

getTextNodesIn(document.body).forEach((item) => { item.textContent = "У меня есть несколько клиентов, которые записались ко мне на стрижку, не успев даже зайти в салон." })
