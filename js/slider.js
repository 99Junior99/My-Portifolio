// slide home


const btns = document.querySelectorAll("#nav-btn");


const contents = document.querySelectorAll(".title");

var sliderNav = function (manual) {
    btns.forEach((btn) => {
        btn.classList.remove("active");

    });


    contents.forEach((content) => {
        content.classList.remove("active");
    });

    btns[manual].classList.add("active");
    contents[manual].classList.add("active");
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});
