import {getRandomInteger,createRandomIdFromRangeGenerator,createRandomComment} from './utils.js';


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

const names = ['Артём', 'Александра', 'Петр', 'Никита', 'Виктория', 'Савелий', 'Анна', 'Дарья'];

const getId = createRandomIdFromRangeGenerator(1,25);
const getUrl = createRandomIdFromRangeGenerator(1,25);

const photoDescription = () => ({
  id: getId(),
  url: `photos/${getUrl()}.jpg`,
  descriptions: descriptions[getRandomInteger(0,19)],
  likes: getRandomInteger(15,200),
  comments: createRandomComment(names,commentsList)
});
const result = () => Array.from({length: 25},photoDescription);
export {result};