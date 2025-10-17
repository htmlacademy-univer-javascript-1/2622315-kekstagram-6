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

const createPhotoId = getPhotoId();

const getPhotoUrl = (id) => photos/${id}.jpg;

const getPhotoDescription = () => {
  const descriptions = [
    'Рассвет в горах',
    'Улица старого города',
    'Кошки на подоконнике',
    'Осенний парк',
    'Морской шторм',
    'Уютное кафе',
    'Зимний лес',
    'Город ночью',
    'Поле с цветами',
    'Река в тумане',
    'Закат на пляже',
    'Кофе и книга',
    'Горная тропа',
    'Дождь в городе',
    'Снежные вершины',
    'Мост через реку',
    'Сакура весной',
    'Пустынный пейзаж',
    'Водопад в лесу',
    'Северное сияние'
  ];
  return getRandomArrayElement(descriptions);
};

function getRandomLikes() {
  return Math.floor(Math.random() * 186) + 15;
}

const getPhotoComment = () => {
  const commentsList = [
    'Отличное фото!',
    'Какой красивый кадр!',
    'Обожаю такие моменты',
    'Прелесть просто',
    'Идеально снято',
    'Милый котик',
    'Хочу туда же',
    'Невероятные цвета',
    'Это просто волшебство',
    'Сохранил себе',
    'Лучшее фото дня',
    'Как атмосферно!',
    'Душа отдыхает',
    'Потрясающе',
    'Обожаю такие пейзажи'
  ];
  return getRandomArrayElement(commentsList);
};

const getCommentAvatar = () => img/avatar-${getRandomInteger(1, 6)}.svg;

const getCommentName = () => {
  const names = ['Артём', 'Александра', 'Петр', 'Никита', 'Виктория', 'Савелий', 'Анна', 'Дарья'];
  return getRandomArrayElement(names);
};

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