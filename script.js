const image_data = [
    {
        id: 0,
        src: "./images/1.jpg",
    },
    {
        id: 1,
        src: "./images/2.jpg",
    },
    {
        id: 2,
        src: "./images/3.jpg",
    },
    {
        id: 3,
        src: "./images/4.jpg",
    },
    {
        id: 4,
        src: "./images/5.jpg",
    },
];

arrow_left = document.querySelector(".slider__left");
arrow_right = document.querySelector(".slider__right");
pages = document.querySelector(".slider__pages");

let current = 0;

function createPage(id) {
    const div = document.createElement("div");
    div.className = "slider__page";

    div.classList.add();
    div.setAttribute("data-id", id);

    div.addEventListener('click', event => {
        current = id;
        refreshImages(id);
        // console.log(event.target.dataset.id);
    })

    pages.appendChild(div);
}

arrow_left.addEventListener("click", (event) => {
    current--;
    if (current < 0) {
        current = image_data.length - 1;
    }

    image_data.find((el) => { });

    refreshImages(current);
});

arrow_right.addEventListener("click", (event) => {
    current++;
    if (image_data.length - 1 < current) {
        current = 0;
    }
    refreshImages(current);
});

function refreshImages(id) {
    document.getElementById("slider__img").src = image_data[id].src;


    const el = Array.from(document.querySelectorAll('.slider__page'));

    el.forEach(item => {
        item.classList.remove("active");
    });

    el[id].classList.add("active");
}

function init() {
    image_data.forEach((el) => {
        createPage(el.id);
    });

    refreshImages(current);
}

init();
