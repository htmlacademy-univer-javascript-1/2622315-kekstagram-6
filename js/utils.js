function onEscapePress(evt, funcName){
  if(evt.key === 'Escape'){
    funcName();
  }
}

function debounce (callback, timeoutDelay = 500) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export {onEscapePress, debounce};
