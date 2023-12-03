let scroller = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
let header = document.getElementById("header");
let title = "لطلاب قسم نظم";

const delay = 100; // in milliseconds
let i = 0;

window.onscroll = function () {
    this.scrollY >= 700 ? scroller.classList.add("show") :
        scroller.classList.remove("show");

    if (this.scrollY >= 100) {
        header.style.backgroundColor = "#2c2c385d";
    } else {
        header.style.backgroundColor = "#2c2c38"
    }
}

scroller.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
    })
})


function typeString() {
    if (i < title.length) {
        document.getElementById("title").textContent += title.charAt(i);
        i++;
        setTimeout(typeString, delay);
    }
}

window.onload = function () {
    typeString();
}
