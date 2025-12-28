const maxValue = '100%';
const minValue = '25%';
const scaleValue = document.querySelector('.scale__control--value');
const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');
const imgUpload = document.querySelector('.img-upload__preview');

function scaleImg(){
  scaleBigger.addEventListener('click',()=>{
    if(scaleValue.value !== maxValue){
      scaleValue.value = `${parseInt(scaleValue.value.replace('%', ''), 10) + 25}%`;
      imgUpload.style.transform = `scale(${ parseInt(scaleValue.value.replace('%', ''), 10) / 100 })`;
    }
  });

  scaleSmaller.addEventListener('click',()=>{
    if(scaleValue.value !== minValue){
      scaleValue.value = `${parseInt(scaleValue.value.replace('%', ''), 10) - 25}%`;
      imgUpload.style.transform = `scale(${ parseInt(scaleValue.value.replace('%', ''), 10) / 100 })`;
    }
  });
}

export{scaleImg};