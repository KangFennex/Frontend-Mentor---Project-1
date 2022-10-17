const rating = document.querySelectorAll('.rating')
const submit = document.querySelector('button')
const number = document.querySelector('.rating-number')
const content = document.querySelector('.content')
const thankYou = document.querySelector('.content-thank-you')
const score = document.querySelector('.chosenRating')

submit.disabled = true;

rating.forEach(rate => {
    rate.addEventListener('click', (e) => {
        removeClass();
        rate.classList.add('selected');
        submit.disabled = false;
    });
    submit.disabled;
});

rating.forEach(function (rating) {
    rating.addEventListener("click", function (){
        score.innerHTML = rating.innerHTML;
    })
})

function removeClass() {
    rating.forEach(el => {
        el.classList.remove('selected')
    })
}

submit.addEventListener('click', () => {
    content.style.display = 
    'none';
    thankYou.style.display = 'block';
    })