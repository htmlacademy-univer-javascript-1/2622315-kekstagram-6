import { defaultPictures } from './render.js';

const ACTIVE_CLASS = 'img-filters__button--active';

const filterRandom = document.querySelector('#filter-random');
const filterDiscussed = document.querySelector('#filter-discussed');

function shuffleArray(array) {
  const length = array.length;
  const shuffle = array.slice();
  for (let i = length - 1; i > 0; i -= 1) {
    const random = Math.floor(Math.random() * (i + 1));
    const current = shuffle[i];
    shuffle[i] = shuffle[random];
    shuffle[random] = current;
  }
  return shuffle.slice(0, 10);
}

function sortByCommentCount(a, b) {
  return b.comments.length - a.comments.length;
}

function filterPictures(pictureArray) {
  if (filterRandom.classList.contains(ACTIVE_CLASS)) {
    return shuffleArray(pictureArray);
  } else if (filterDiscussed.classList.contains(ACTIVE_CLASS)) {
    return defaultPictures.slice().sort(sortByCommentCount);
  }
  return defaultPictures;
}

export{filterPictures};
