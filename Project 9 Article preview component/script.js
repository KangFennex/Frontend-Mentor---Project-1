const btn = document.querySelector('.share-button')
const social = document.querySelector('.social--container');
const popup = document.querySelector('.share--container');

btn.addEventListener('click', () => {
    if(screen.width < 850) {
social.classList.toggle('hidden')
popup.classList.toggle('hidden')
btn.classList.toggle('active')
    } else {
        popup.classList.toggle('hidden')
btn.classList.toggle('active')
    }
})
