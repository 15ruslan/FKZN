setTimeout(function(){
    document.getElementById("popup").classList.add("open")
},1000)

document.getElementById("popup-close").addEventListener("click", function() {
    document.getElementById("popup").classList.remove("open")
});

window.addEventListener("keydown", e => {
    if (e.key === "Escape") {
        document.getElementById("popup").classList.remove("open")
    }
});

document.querySelectorAll(".popup").addEventListener("click", event => {
    event.ClickWithInPopup = true;
});
document.getElementById("popup").addEventListener("click", event => {
    if (event.ClickWithInPopup) return;
    event.currentTarget.classList.remove("open");
});