const test = document.querySelector('.mainContainer');
const test1 = document.querySelector('.apiContainer');
const button = document.querySelector('.searchButton');
const button1 = document.querySelector('.returnButton');

button.addEventListener('click', () =>{
    test.style.display = 'none';
    test1.style.display = 'flex';
})
button1.addEventListener('click', () =>{
    test1.style.display = 'none';
    test.style.display = 'flex';
})