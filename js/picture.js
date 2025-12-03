import {result} from './data.js';

const pictureList = document.querySelector('.pictures');
const pictureListFragment = document.createDocumentFragment();
const templatePic = document.querySelector('#picture').content;
const simularPictures = result();
simularPictures.forEach((picture)=>{
  const generatePic = templatePic.cloneNode(true);
  generatePic.querySelector('.picture__img').src = picture.url;
  generatePic.querySelector('.picture__img').alt = picture.description;
  generatePic.querySelector('.picture__info').querySelector('.picture__comments').append(picture.comments.length);
  generatePic.querySelector('.picture__info').querySelector('.picture__likes').append(picture.likes);
  pictureListFragment.appendChild(generatePic);
});
pictureList.appendChild(pictureListFragment);