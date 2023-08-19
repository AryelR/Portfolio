var currentImage = 0;

const imgs = ["art(1).jpg", "art(2).jpg", "art(3).jpg",
    "art(4).jpg", "art(5).jpg", "art(6).jpg", "art(7).jpg",
    "art(8).jpg", "art(9).jpg", "art(10).jpg", "art(11).jpg",
    "art(12).jpg", "art(13).jpg", "art(14).jpg", "art(15).jpg",
    "art(16).jpg", "art(17).jpg", "art(18).jpg", "art(19).jpg",
    "art(20).jpg", "art(21).jpg", "art(22).jpg", "art(23).jpg",
    "art(24).jpg", "art(25).jpg", "art(26).jpg", "art(27).jpg",
    "art(28).jpg", "art(29).jpg", "art(30).jpg", "art(31).jpg",
    "art(32).jpg", "art(33).jpg", "art(34).jpg", "art(35).jpg",
    "art(36).jpg", "art(37).jpg", "art(38).jpg", "art(39).jpg",
    "art(40).jpg", "art(41).jpg"
]

function nextImage() {
    var image = document.getElementById("image");
    currentImage++;
    if (currentImage == imgs.length) {
        currentImage = 0;
    }
    image.src = "images\\art\\" + imgs[currentImage];
}

function prevImage() {
    currentImage--;
    if (currentImage == -1) {
        currentImage = imgs.length - 1;
    }
    image.src = "images\\art\\" + imgs[currentImage];
}