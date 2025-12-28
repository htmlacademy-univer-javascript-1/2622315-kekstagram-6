
function onEscapePress(evt, funcName){
  if(evt.key === 'Escape'){
    funcName();
  }
}

export {onEscapePress};
