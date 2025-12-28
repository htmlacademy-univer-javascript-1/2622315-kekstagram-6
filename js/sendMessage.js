import { onEscapePress } from './utils.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const body = document.querySelector('body');
const success = successTemplate.cloneNode(true);
const closeButtonSuccess = success.querySelector('.success__button');

const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const error = errorTemplate.cloneNode(true);
const closeButtonError = error.querySelector('.error__button');

function initializeMessageHandlers(message,closeButton) {
  message.classList.add('hidden');
  body.appendChild(message);
  const onDocumentKeydown = (evt) => onEscapePress(evt, closeMessage);

  function closeMessage(){
    message.classList.add('hidden');
    document.removeEventListener('keydown', onDocumentKeydown);
  }

  function showMessage(){
    message.classList.remove('hidden');
    document.addEventListener('keydown', onDocumentKeydown);
  }

  closeButton.addEventListener('click', closeMessage);

  document.addEventListener('click', (evt) => {
    if(evt.target === message){
      closeMessage();
    }
  });

  return showMessage;
}

const showSuccess = initializeMessageHandlers(success,closeButtonSuccess);
const showError = initializeMessageHandlers(error,closeButtonError);

export { showSuccess, showError};
