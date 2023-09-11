
const inputField = document.getElementById('inputField');
const customDiv = document.getElementById('customDiv');


inputField.addEventListener('mouseenter', () => {
    // При наведенні фокусу на полі вводу, показуємо <div>
    customDiv.style.opacity = '1';
});


inputField.addEventListener('mouseleave', () => {
    // При виході фокусу з полі вводу, приховуємо <div>
    customDiv.style.opacity = '0';
});