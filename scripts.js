console.log("Hoo boy are you linked!")

// DEEPENDENCIES AND DOM ELEMENTS

// ---------buttons
const autoEventButton = document.getElementById("autoEventButton")
const identifyButton = document.getElementById("identifyButton")

// ---------forms
const identifyFormValue = document.getElementById("identifyValue")

// FUNCTIONS

function autoEventFun () {
    console.log("You pressed a button!")
}

function identifyFun (event) {
    event.preventDefault()
    const identifyValue = identifyFormValue.value;
    console.log(`This is the value of the form: ${identifyValue}`)
}

// EVENT LISTENERS
autoEventButton.addEventListener("click", autoEventFun)
identifyButton.addEventListener("click", identifyFun)