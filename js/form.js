import { onEscapePress } from './utils.js';
import { showSuccess, showError } from './sendMessage.js';
import {fentchData} from './api.js';

const imgUpload = document.querySelector('.img-upload__preview');
const scaleValue = document.querySelector('.scale__control--value');

const file = document.querySelector('.img-upload__input');
const overlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');

const form = document.querySelector('.img-upload__form');
const hashteg = form.querySelector('.text__hashtags');
const description = form.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'form__item--invalid',
  successClass: 'form__item--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'p',
  errorTextClass: 'form__error'
});

const regex = /^#[a-zA-Zа-яёА-ЯЁ0-9]{1,19}$/i;
const maxHashtagCount = 5;
const errors = {
  invalidCount: 'Колчичество хэштегов больше пяти!',
  invalidUnique: 'Хэштеги не должны повторяться!',
  invalidReg: 'Некорректный хэштег!'
};

let errorType = '';

const onDocumentKeydown = (evt) => {
  if(document.activeElement !== hashteg && document.activeElement !== description){
    onEscapePress(evt, closeForm);
  }
};

function openForm(){
  file.addEventListener('change', () => {
    overlay.classList.remove('hidden');
    body.classList.add('modal-open');
    document.addEventListener('keydown', onDocumentKeydown);
  });
}

function closeForm(){
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  file.value = '';
  hashteg.value = '';
  description.value = '';
  pristine.reset();
  imgUpload.style.transform = 'scale(1)';
  imgUpload.style.filter = '';
  document.querySelector('.img-upload__effect-level').classList.add('hidden');
  scaleValue.value = '100%';
  document.removeEventListener('keydown', onDocumentKeydown);
}

const closeButton = document.querySelector('.img-upload__cancel');
closeButton.addEventListener('click',closeForm);

function validateHashtag(value){
  const hashtegs = value.split(/\s+/).filter(Boolean);

  if(hashtegs.length > maxHashtagCount){
    errorType = 'invalidCount';
    return false;
  }

  const lowCaseHashtegs = hashtegs.map((el) => el.toLowerCase());
  const uniqueHashtegs = new Set(lowCaseHashtegs);
  if(uniqueHashtegs.size !== hashtegs.length){
    errorType = 'invalidUnique';
    return false;
  }

  for(let i = 0; i < hashtegs.length; i++){
    if(!regex.test(hashtegs[i])){
      errorType = 'invalidReg';
      return false;
    }
  }

  return true;
}

const maxDescLen = 140;
function validateDescription(value){
  return value.length <= maxDescLen;
}

pristine.addValidator(hashteg,validateHashtag, () => errors[errorType]);
pristine.addValidator(description, validateDescription, 'Превышена длинна комментария!');

const thenFunc = () =>{
  closeForm();
  showSuccess();
};

const catchFunc = () =>{
  document.removeEventListener('keydown', onDocumentKeydown);
  showError();
};

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (pristine.validate()) {
    const formData = new FormData(form);
    fentchData('POST',formData,null,thenFunc,catchFunc);
  }
});

export {openForm};
