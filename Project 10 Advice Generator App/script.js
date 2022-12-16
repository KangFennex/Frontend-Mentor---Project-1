const adviceNumber = document.querySelector(".advice-num");
const adviceSlip = document.querySelector(".advice");
const randomBtn = document.querySelector(".random-btn");
const leadTitle = document.querySelector(".lead-title");
const input = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-btn");

// Search button
const expand = () => {
  searchBtn.classList.toggle("close");
  input.classList.toggle("square");
};

searchBtn.addEventListener("click", expand);

// Random advice generator button
function loadQuote () {
  fetch('https://api.adviceslip.com/advice', {cache: 'no-store'})
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      adviceNumber.innerHTML = `Advice #${data.slip.id}`;
      adviceSlip.innerHTML = `"${data.slip.advice}"`;
    })
    .catch((error) => console.error("We could not fetch the advice: " + error));
};

randomBtn.addEventListener('click', loadQuote);
