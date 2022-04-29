function favoriteColor() {
    alert("Red")
}

function favoritePlace() {
    alert("Austin")
}

function favoriteRitual() {
    alert("Watching the newest episode of one piece every Sunday")
}

let color = document.querySelector("#color")
let place = document.querySelector("#place")
let ritual = document.querySelector("#ritual")

color.addEventListener("click", favoriteColor)
place.addEventListener("click", favoritePlace)
ritual.addEventListener("click", favoriteRitual)