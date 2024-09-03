const toggleButton = document.getElementById('toggleButton');
const bodyElement = document.body;

toggleButton.addEventListener('click', () => {
  bodyElement.classList.toggle('light-mode');

  if (bodyElement.classList.contains('light-mode')) {
    toggleButton.innerHTML = '<i class="fa-solid fa-moon"></i>';
  } else {
    toggleButton.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }
});
