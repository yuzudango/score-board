let startNumberH = 0
let startNumberG = 0
let scoreH = document.getElementById("scoreHome")
let scoreG = document.getElementById("scoreGuest")

// HOME //

function add1Home() {
    let scoreResultH = startNumberH += 1
    scoreH.textContent = scoreResultH
}

function add3Home() {
    let scoreResultH = startNumberH += 3
    scoreH.textContent = scoreResultH
}

function add5Home() {
    let scoreResultH = startNumberH += 5
    scoreH.textContent = scoreResultH
}

// GUEST //

function add1Guest() {
    let scoreResultG = startNumberG += 1
    scoreG.textContent = scoreResultG
}

function add3Guest() {
    let scoreResultG = startNumberG += 3
    scoreG.textContent = scoreResultG
}

function add5Guest() {
    let scoreResultG = startNumberG += 5
    scoreG.textContent = scoreResultG
}

// RESET //

function resetScore() {
    let scoreResetH = startNumberH = 0
    let scoreResetG = startNumberG = 0
    scoreH.textContent = scoreResetH
    scoreG.textContent = scoreResetG
    
}