import { defaultPictureList } from './picture.js';
import { shuffleArray } from './utils.js';

const ACTIVE_CLASS = 'img-filters__button--active';
const filterRandom = document.querySelector('#filter-random');
const filterDiscussed = document.querySelector('#filter-discussed');

function sortByCommentCount(a, b) {
  return b.comments.length - a.comments.length;
}

function filterPictures(pictureArray) {
  if (filterRandom.classList.contains(ACTIVE_CLASS)) {
    return shuffleArray(pictureArray);
  } else if (filterDiscussed.classList.contains(ACTIVE_CLASS)) {
    return defaultPictureList.slice().sort(sortByCommentCount);
  }
  return defaultPictureList;
}

export{filterPictures};
