let rangeinput = document.querySelectorAll(".range-input input");
let rangetext = document.querySelectorAll(".range-text div")
let progress = document.querySelector(".progress")
let pricemax = rangeinput[0].max;
rangeinput.forEach(input =>{
    input.addEventListener('input', (event) =>{
    let minval = parseInt(rangeinput[0].value);
    let positionMin = (minval / pricemax) * 100;
    })
})
