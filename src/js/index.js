const btnAdvice = document.querySelector(".btn-advice").addEventListener("click", function () {
    adviceGenerator()
})

const numberAdvice = document.querySelector(".number-advice")
const advice = document.querySelector(".advice")

async function adviceGenerator(){
    const endereco =  "https://api.adviceslip.com/advice"
    const response = await fetch(endereco)
    const teste = await response.json()
    const numberSilpId = teste.slip.id
    const adviceSlip = teste.slip.advice


    numberAdvice.innerHTML = `advice # ${numberSilpId}`
    advice.innerHTML = `${adviceSlip}`
}

adviceGenerator()