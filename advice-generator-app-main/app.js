const adviceId = document.querySelector(".advice-id");
const advice = document.querySelector(".advice-txt");
const diceButton = document.querySelector(".dice");

window.addEventListener("load", function(){
    getQuote();
})

diceButton.addEventListener("click", function(){
    getQuote();
})


function getQuote() {
    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
    // .then((data) => data.slip)
    .then((data) => {
            adviceId.textContent = `Advice # ${data.slip.id}`;
            advice.textContent = data.slip.advice;
        })
}