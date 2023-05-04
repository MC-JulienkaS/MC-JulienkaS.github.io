"use strict"

// returns a random integer from 1 to 6 into variable "randomNumber"
const randomNumber = Math.floor(Math.random() * 10) + 1

/**
 * This function updates slader value
 */
function updatesSliderValue(valueFromSlider) {
    document.getElementById("slider-value").innerHTML = valueFromSlider

    //process
    if (valueFromSlider == randomNumber) {
        document.getElementById("answer").innerHTML =
            "the answer was, " + randomNumber + "!" + " You got it! good job"
    }

    if (valueFromSlider != randomNumber) {
        document.getElementById("answer").innerHTML =
            "the answer was, " + randomNumber + "!" + " Nice guess, but try again"
    }
}
