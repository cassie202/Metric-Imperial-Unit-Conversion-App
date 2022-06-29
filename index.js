/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound

goals:if user types any number in the input field and click convert, the app should generate the inputed value converted 
from meter and feet (length)
from liters and gallons for (volume)
from kg and pounds for (mass)

steps:
set input to be empty
grab the input field
grab the convert button
listen for clicks on the button
convert the length from feet to meter 
display the converted input in length from meter to feet using innerHTML
convert the volume from liters and gallons 
display the converted input in volume from liters to gallons using innerHTML
convert the mass from kg and pounds
 display the converted input in mass from kg to pounds using innerHTML
 */






 let btn = document.getElementById("btn")
 let length = document.getElementById("length")
 let volume = document.getElementById("volume")
 let mass = document.getElementById("mass")
 let clear = document.getElementById ("clear")
 
 
 function clearInput(){
     document.getElementById("input-el").value = " "
     length.innerHTML = " "
     volume.innerHTML = " "
     mass.innerHTML = " "
 } 
 
 
 
 function convert(){
    //  1 meter = 3.281 feet
    //  1 liter = 0.264 gallon
    //  1 kilogram = 2.204 pound
     
     let inputEl = document.getElementById("input-el").value;
     console.log(inputEl)
     let lengthInMeter = inputEl / 3.281;
     let lengthInFeet = inputEl * 3.281;
     let volumeInLiter = inputEl * 0.264;
     let volumeInGallon = inputEl / 0.264;
     let massInkilos = inputEl * 2.204;
     let massInPounds = inputEl / 2.204;
     
     length.innerHTML = `${inputEl} meters = ${ lengthInFeet.toFixed(3)}  feet ︱  ${inputEl} feet = ${ lengthInMeter.toFixed(3)} meters `
     volume.innerHTML = `${inputEl} liters = ${ volumeInLiter.toFixed(3)}  gallons ︱  ${inputEl} gallons = ${ volumeInGallon.toFixed(3)} liters `
     mass.innerHTML = `${inputEl} kilogram = ${ massInkilos.toFixed(3)}  pounds ︱  ${inputEl} pounds = ${ massInPounds.toFixed(3)} kilogram `
     
     
     
 }
 
 btn.addEventListener("click", convert)
 clear.addEventListener ("click", clearInput)