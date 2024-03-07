let car = document.getElementById('car')
let gameBoard = document.getElementById('gameBoard')
let forwardBtn = document.getElementById('forward')
let engineStateBtn = document.getElementById('engineState')
let backwardBtn = document.getElementById('backward')
let stopLights = document.getElementsByClassName('stop-lights')
let lights = document.getElementsByClassName('lights')
let engineState = false
let direction = null

let gameBoardWidth = 0
let maxDistance = 0
let carWidth = 120
let currentPosition = 0



engineStateBtn.innerHTML = 'start'

function isStartedEngine() {
    return engineState
}

function getMaxdistance() {
    gameBoardWidth = gameBoard.clientWidth
    maxDistance = gameBoardWidth - carWidth
}

function getDirection() {
    return direction
}
window.onkeydown = (event) => {
    let arrowLeft = 37
    let arrowRight = 39
    let enter = 13
    if (event.keyCode == enter) {
        engineStateBtnKey()
    }
    if (event.keyCode == arrowLeft) {
        backwardBtnKey()
    }
    if (event.keyCode == arrowRight) {
        forwardBtnKey()
    }

}
function forwardBtnKey() {
    getMaxdistance()
    isStartedEngine()
    direction = 'forward'
}
function backwardBtnKey() {
    getMaxdistance()
    isStartedEngine()
    direction = 'backward'
}
function engineStateBtnKey() {
    engineState = !engineState
    engineStateBtn.innerHTML = engineState ? 'stop' : 'start'
    lights[0].classList.toggle('turnOnLights')
    stopLights[0].classList.toggle('turnOnStopLights')
    direction = null
    engineStateBtn.classList.toggle('engine-started')

}
setInterval(() => {
    if (isStartedEngine()) {
        if (getDirection() == 'forward') {

            if (currentPosition < maxDistance) {
                currentPosition += 1

            }

        }
        if (getDirection() == 'backward') {

            if (currentPosition > 0) {
                currentPosition -= 1

            }
        }
    }
    car.style.left = currentPosition + 'px'
}, 10);