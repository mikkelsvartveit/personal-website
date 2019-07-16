window.addEventListener("scroll", function() {
    var topButton = document.getElementById("top-button");
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
        
    if(scrollPosition > windowHeight / 4) {
        topButton.classList = "";
    } else {
        topButton.classList = "hidden";
    }
});

var photoElements = document.getElementById("photos-grid").children;
for(var i = 0; i < photoElements.length; i++) {
    photoElements[i].addEventListener("click", function(){
        var photoUrl = this.getAttribute("src").replace("/thumbs/", "/photos/");
        var fullscreenPhoto = document.getElementById("photo-fullscreen");
        fullscreenPhoto.children[0].setAttribute("src", photoUrl);
        document.getElementById("dim").classList = "";
        fullscreenPhoto.classList = "";
    });
}

document.getElementById("closePhotoButton").addEventListener("click", closePhoto);

document.getElementById("dim").addEventListener("click", closePhoto);

function closePhoto() {
    document.getElementById("dim").classList = "hidden";
    document.getElementById("photo-fullscreen").classList = "hidden";
    document.getElementById("photo-fullscreen").children[0].setAttribute("src", "#");
}