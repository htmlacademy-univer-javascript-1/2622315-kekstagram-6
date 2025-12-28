function prepareData(method, data) {
  const url = method === 'GET'
    ? 'https://29.javascript.htmlacademy.pro/kekstagram/data'
    : 'https://29.javascript.htmlacademy.pro/kekstagram';

  const options = {
    method: method,
  };

  if (method === 'POST' && data) {
    options.body = data;
  }
  return { url, options };
}

function createErrorDiv() {
  const errorDiv = document.createElement('div');
  errorDiv.style.color = 'red';
  errorDiv.style.fontWeight = 'bold';
  errorDiv.style.position = 'fixed';
  errorDiv.style.top = '0';
  errorDiv.style.left = '0';
  errorDiv.style.width = '100%';
  errorDiv.style.backgroundColor = 'white';
  errorDiv.style.borderBottom = '2px solid red';
  errorDiv.style.zIndex = '1000';
  errorDiv.innerText = 'Упс, ошибка со стороны сервера, попробуйте перезагрузить страницу или зайти попозже :(';
  errorDiv.style.textAlign = 'center';
  document.body.appendChild(errorDiv);
}

function fentchData(method, data = null, getThenFunc = () => {}, postThenFunc = () => {}, postCatchFunc = () => {}) {
  const { url, options } = prepareData(method, data);

  fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        throw Error();
      }
      return method === 'GET' ? response.json() : response;
    })
    .then((result) => {
      if (method === 'GET') {
        getThenFunc(result);
      } else {
        postThenFunc();
      }
    })
    .catch(() => {
      if (method === 'GET') {
        createErrorDiv();
      } else {
        postCatchFunc();
      }
    });
}

export { fentchData };