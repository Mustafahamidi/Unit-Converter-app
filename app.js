const button = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")
const LengthEl = document.getElementById("meter")
const VolumeEl = document.getElementById("liters")
const MassEl = document.getElementById("kilograms")
const one_meter = 3.281
const one_liter = 0.264
const one_kilogram = 2.204

button.addEventListener("click", function (){
    if(inputEl.value !== "" && Number(inputEl.value)){
        let value = inputEl.value
        let inputValue = Number(value)

        let feet = inputValue * one_meter
        let meter = inputValue / one_meter

        let gallon = inputValue * one_liter
        let liter = inputValue / one_liter

        let pound = inputValue * one_kilogram
        let kilogram = inputValue / one_kilogram

        LengthEl.textContent = `${value} meters = ${feet.toFixed(2)} feets | ${value} feet = ${meter.toFixed(2)} meters `
        VolumeEl.textContent = `${value} liter = ${gallon.toFixed(2)} gallons | ${value} liters = ${liter.toFixed(2)} gallons`
        MassEl.textContent = `${value} kilogram = ${pound.toFixed(2)} pounds | ${value} pounds = ${kilogram.toFixed(2)} kilograms`
    }else{
        alert("Please enter a number")
    }
    
})





