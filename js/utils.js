
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const res = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(res);
};

function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];
  return function() {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

function createMessage(messages) {
  const oneOrTwo = Math.random();
  if(oneOrTwo > 0.5){
    const message1 = messages[getRandomInteger(0,4)];
    let message2 = messages[getRandomInteger(0,4)];
    while(message2 === message1) {
      message2 = messages[getRandomInteger(0,4)];
    }
    return message1 + message2;
  } else {
    return messages[getRandomInteger(0,4)];
  }
}

function createRandomComment (names,messages) {
  const comments = [];
  for(let i = 0;i < getRandomInteger(0,30);i++){
    const comment = {
      id: createRandomIdFromRangeGenerator(1,1000),
      avatar: `img/avatar-${createRandomIdFromRangeGenerator(1,6)()}.svg`,
      message: createMessage(messages),
      name: names[getRandomInteger(0,4)],
    };
    comments.push(comment);
  }
  return comments;
}

export {getRandomInteger,createRandomIdFromRangeGenerator,createRandomComment};
