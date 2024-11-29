function changeTitle() {
    let title = document.querySelector("h1")
    title.innerText = "Joking!"
}

function darkMode() {
    let CSSswitch = document.querySelector("link")
    CSSswitch.href = "/assets/darkMode.css"
}

function switchAdress() {
    let via = document.querySelector("#via")
    via.innerText = "Königstrasse 1"
    let cap = document.querySelector("#cap")
    cap.innerText = "47798 Krefeld"
    let paese = document.querySelector("#paese")
    paese.innerText = "Deutchsland"
}