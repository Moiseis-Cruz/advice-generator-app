const btnAdvice = document.querySelector(".btn-advice").addEventListener("click", function () {
    adviceGenerator()
})

const numberAdvice = document.querySelector(".number-advice")
const advice = document.querySelector(".advice")

async function adviceGenerator(){
    const url =  "https://api.adviceslip.com/advice"
    const response = await fetch(url)
    const action = await response.json()
    const numberSilpId = action.slip.id
    const adviceSlip = action.slip.advice


    numberAdvice.innerHTML = `advice # ${numberSilpId}`
    advice.innerHTML = `${adviceSlip}`
}

adviceGenerator()