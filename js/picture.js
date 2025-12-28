import { renderBigPicture } from './bigpicture.js';

const pictureList = document.querySelector('.pictures');
const pictureListFragment = document.createDocumentFragment();
const templatePic = document.querySelector('#picture').content.querySelector('.picture');

function fillPicture(picture) {
  const generatePic = templatePic.cloneNode(true);
  generatePic.querySelector('.picture__img').src = picture.url;
  generatePic.querySelector('.picture__img').alt = picture.description;
  generatePic.querySelector('.picture__comments').textContent = picture.comments.length;
  generatePic.querySelector('.picture__likes').textContent = picture.likes;
  renderBigPicture(generatePic, picture.comments);
  return generatePic;
}

const renderSimularPictures = function(simularPicturesList) {
  simularPicturesList.forEach((picture) => {
    const generatePic = fillPicture(picture);
    pictureListFragment.appendChild(generatePic);
  });
  pictureList.appendChild(pictureListFragment);
};

export {renderSimularPictures};
