//drag and drop: https:developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API

const movies = document.querySelectorAll(".movie");
const places = document.querySelectorAll(".rankPlace");

for (let i = 0; i < movies.length; i++) {
    movies[i].addEventListener("dragstart", dragStart);
    movies[i].addEventListener("dragend", dragEnd);
}

for (let i = 0; i < places.length; i++) {
    places[i].addEventListener("dragover", dragOver);
    places[i].addEventListener("dragenter", dragEnter);
    places[i].addEventListener("drop", dragDrop);
}

function dragStart() {
    this.classList.add("dragging");
}

function dragEnd() {
    this.classList.remove("dragging");
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragDrop() {
    const movie = document.querySelector(".dragging");
    this.appendChild(movie);
}