const widthInput = document.getElementById('width-input');
const heightInput = document.getElementById('height-input');
const submitBtn = document.getElementById('submit-btn');
const myBox = document.getElementById('my-box');
const boxText = document.getElementById('box-text');
const title = document.getElementById('title');

submitBtn.addEventListener('click', () => {
  const width = Number(widthInput.value);
  const height = Number(heightInput.value);

  // check fields
  if (width > 0 && height > 0) {
    myBox.style.width = width + 'px';
    myBox.style.height = height + 'px';
    boxText.innerText = width + ' x ' + height;
  } else {
    title.textContent = 'are you serious?';
    submitBtn.innerText = 'Error';
    submitBtn.style.backgroundColor = '#5f0000';

    setTimeout(() => {
      title.textContent = 'Pixel Visualizer';
      submitBtn.innerText = 'Submit';
      submitBtn.style.backgroundColor = '#0a005f';
    }, 1500);
  }
});
