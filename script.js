const widthInput = document.getElementById('width-input');
const heightInput = document.getElementById('height-input');
const submitBtn = document.getElementById('submit-btn');
const myBox = document.getElementById('my-box');
const boxText = document.getElementById('box-text');
const title = document.getElementById('title');
const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');
const themeBtn = document.getElementById('theme-btn');

const savedTheme = localStorage.getItem('pixel-visualizer-theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
}

function updateThemeButton() {
  const darkModeEnabled = document.body.classList.contains('dark-mode');
  themeBtn.textContent = darkModeEnabled ? '☾' : '☀';
  themeBtn.setAttribute('aria-label', darkModeEnabled ? 'Switch to light mode' : 'Switch to dark mode');
}

updateThemeButton();

themeBtn.addEventListener('click', () => {
  const darkModeEnabled = document.body.classList.toggle('dark-mode');
  localStorage.setItem('pixel-visualizer-theme', darkModeEnabled ? 'dark' : 'light');
  updateThemeButton();
});

menuBtn.addEventListener('click', () => {
  const isOpen = sidebar.classList.toggle('is-open');
  menuBtn.setAttribute('aria-expanded', String(isOpen));
  menuBtn.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  sidebar.setAttribute('aria-hidden', String(!isOpen));
});

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
    submitBtn.classList.add('is-error');
    submitBtn.style.backgroundColor = '#5f0000';

    setTimeout(() => {
      title.textContent = 'Pixel Visualizer';
      submitBtn.innerText = 'Submit';
      submitBtn.classList.remove('is-error');
      submitBtn.style.backgroundColor = '#0a005f';
    }, 1500);
  }
});
