const fullImageBox = document.getElementById("fullImageBox");
const fullImage = document.getElementById("fullImage");

function openImage(pic) {
    fullImageBox.style.display = "flex";
    fullImage.src = pic;
}

function closeImage() {
    fullImageBox.style.display = "none";
}
