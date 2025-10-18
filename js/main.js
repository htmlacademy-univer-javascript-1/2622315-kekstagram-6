import { descriptions, commentsList, names } from './data.js';
import { getRandomInteger, getRandomArrayElement, getPhotoId, getRandomLikes } from './utils.js';

const createPhotoId = getPhotoId();

const getPhotoUrl = (id) => `photos/${id}.jpg`;

const getPhotoDescription = () => getRandomArrayElement(descriptions);

const getPhotoComment = () => getRandomArrayElement(commentsList);

const getCommentAvatar = () => `img/avatar-${getRandomInteger(1, 6)}.svg`;

const getCommentName = () => getRandomArrayElement(names);

const createComment = () => ({
  id: getRandomInteger(1, 25),
  avatar: getCommentAvatar(),
  message: getPhotoComment(),
  name: getCommentName()
});

const createPhoto = () => ({
  id: createPhotoId(),
  url: getPhotoUrl(createPhotoId()),
  description: getPhotoDescription(),
  likes: getRandomLikes(),
  comments: Array.from({ length: getRandomInteger(0, 30) }, createComment)
});

const generatePhotos = () => Array.from({ length: 25 }, createPhoto);

const photos = generatePhotos();

export { photos };
 