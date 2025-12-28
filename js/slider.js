const sliderElement = document.querySelector('.effect-level__slider');
const sliderValue = document.querySelector('.effect-level__value');
const imgUpload = document.querySelector('.img-upload__preview');
const slider = document.querySelector('.img-upload__effect-level');

let selectedEffect = 'none';

function createSlider() {
  slider.classList.add('hidden');
  noUiSlider.create(sliderElement, {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    connect: 'lower',
  });

  sliderElement.noUiSlider.on('update', () => {
    sliderValue.value = sliderElement.noUiSlider.get();
    applyFilter(sliderValue.value);
  });
}

function applyFilter(value) {
  switch (selectedEffect) {
    case 'chrome':
      imgUpload.style.filter = `grayscale(${value})`;
      break;
    case 'sepia':
      imgUpload.style.filter = `sepia(${value})`;
      break;
    case 'marvin':
      imgUpload.style.filter = `invert(${value}%)`;
      break;
    case 'phobos':
      imgUpload.style.filter = `blur(${value}px)`;
      break;
    case 'heat':
      imgUpload.style.filter = `brightness(${value})`;
      break;
    case 'none':
      imgUpload.style.filter = '';
      break;
  }
}

function handleEffectClick(evt) {
  const effectItem = evt.target.closest('.effects__item');

  if (!effectItem) {
    return;
  }

  const effectInput = effectItem.querySelector('input[type="radio"]');
  selectedEffect = effectInput.value;

  switch (selectedEffect) {
    case 'chrome':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        step: 0.1
      });
      sliderElement.noUiSlider.set(1);
      slider.classList.remove('hidden');
      break;
    case 'sepia':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        step: 0.1
      });
      sliderElement.noUiSlider.set(1);
      slider.classList.remove('hidden');
      break;
    case 'marvin':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100,
        },
        step: 1
      });
      sliderElement.noUiSlider.set(100);
      slider.classList.remove('hidden');
      break;
    case 'phobos':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3,
        },
        step: 0.1
      });
      sliderElement.noUiSlider.set(3);
      slider.classList.remove('hidden');
      break;
    case 'heat':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 1,
          max: 3,
        },
        step: 0.1
      });
      sliderElement.noUiSlider.set(3);
      slider.classList.remove('hidden');
      break;
    case 'none':
      imgUpload.style.filter = '';
      slider.classList.add('hidden');
      break;
  }
}

document.querySelector('.effects__list').addEventListener('click', handleEffectClick);

export{createSlider};
