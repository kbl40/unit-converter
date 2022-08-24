/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const button = document.getElementById("convert-btn")
const input = document.getElementById("input-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

button.addEventListener("click", function() {
    let unit = parseFloat(input.value)
    console.log(unit)
    lengthConvert(unit)
    volumeConvert(unit)
    massConvert(unit)
})

function lengthConvert(length) {
    let lengthFeet = length * 3.280839895
    console.log(lengthFeet)
    let lengthMeters = length / 3.280839895
    lengthEl.innerHTML = `${length} meters = ${lengthFeet.toFixed(3)} feet | ${length} feet = ${lengthMeters.toFixed(3)} meters`
}

function volumeConvert(volume) {
    let volumeGallons = volume * 0.264172
    let volumeLiters = volume / 0.264172
    volumeEl.innerHTML = `${volume} liters = ${volumeGallons.toFixed(3)} gallons | ${volume} gallons = ${volumeLiters.toFixed(3)} liters`
}

function massConvert(mass) {
    let massPounds = mass * 2.20462
    let massKilos = mass / 2.20462
    massEl.innerHTML = `${mass} kilograms = ${massPounds.toFixed(3)} pounds | ${mass} pounds = ${massKilos.toFixed(3)} kilograms`
}