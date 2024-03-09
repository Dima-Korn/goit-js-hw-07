const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', () => {
  const inputValue = nameInput.value.trim(); // Очищення значення від пробілів по краях

  if (inputValue) {
    nameOutput.textContent = inputValue; // Встановлення значення в спан як ім'я
  } else {
    nameOutput.textContent = 'Anonymous'; // Якщо інпут порожній або містить лише пробіли
  }
});