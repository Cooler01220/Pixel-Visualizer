const widthInput = document.getElementById('width-input');
const heightInput = document.getElementById('height-input');
const submitBtn = document.getElementById('submit-btn');
const myBox = document.getElementById('my-box');
const boxText = document.getElementById('box-text');

submitBtn.addEventListener('click', () => {
  const w = widthInput.value;
  const h = heightInput.value;

// check fields
  if (w > 0 && h > 0) {
    myBox.style.width = w + 'px';
    myBox.style.height = h + 'px';
    boxText.innerText = w + ' x ' + h;
  } else {

//    error thing
    submitBtn.innerText = 'Error';
    submitBtn.style.backgroundColor = '#5f0000';

// pls wait and again
    setTimeout(() => {
      submitBtn.innerText = 'Submit';
      submitBtn.style.backgroundColor = '#0a005f';
    }, 1500);
  }
});
