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

function addClass() {
    let linkAmazon = document.querySelectorAll("a")
    let link
    for (i = 0; i < linkAmazon.length; i++) {
        link += linkAmazon[i].classList.add("linkAmazon")
    }
    
}

function changeColor() {
    let linkAmazon = document.querySelectorAll(".linkAmazon")
    let linkRossi 
    for (i = 0; i < linkAmazon.length; i++) {
        linkRossi += linkAmazon[i].style.color = "red"
    }
}

function hideImg() {
    let img = document.querySelectorAll(".imgProdotto")
    let imgNascosta
    for (i = 0; i < img.length; i++) {
        imgNascosta += img[i].style.display = "none"
    }
}

