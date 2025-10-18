const getRandomInteger = (start, end) => {
  const lower = Math.ceil(Math.min(start, end));
  const upper = Math.floor(Math.max(start, end));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

function getPhotoId() {
  let id = 0;
  return () => ++id;
}

const getRandomLikes = () => Math.floor(Math.random() * 186) + 15;

export { getRandomInteger, getRandomArrayElement, getPhotoId, getRandomLikes };
