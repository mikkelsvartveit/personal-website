// Function for closing the fullscreen photo view
function closePhoto() {
    // Applying the 'hidden' class to make the elements hidden
    document.getElementById("dim").classList = "hidden";
    document.getElementById("photo-fullscreen").classList = "hidden";
    document.getElementById("closePhotoButton").classList = "hidden";
    
    // Clears the src attribute to make sure the previous photo doesn't show
    document.getElementById("photo-fullscreen").children[0].setAttribute("src", "data:,");
}

// Function to avoid fullscreen photo view from overflowing the window
function resizePhoto() {
    var photoFullscreen = document.getElementById("photo-fullscreen");
    var photoElement = photoFullscreen.children[0];
    
    var photoWidth = photoElement.clientWidth;
    var photoHeight = photoElement.clientHeight;
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    if(photoWidth/photoHeight > windowWidth/windowHeight) {
        console.log("yes");
        photoFullscreen.classList.add("portrait-fix");
    } else {
        photoFullscreen.classList.remove("portrait-fix");
    }
}

// EVENT LISTENERS:

// Makes anchor links scroll smoothly
var anchors = document.querySelectorAll('a[href^="#"]');
for(var i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener("click", function(event) {
        event.preventDefault();
        
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: 'smooth'
        });
    });
}

// Makes the scroll-to-top button show and hide automatically
window.addEventListener("scroll", function() {
    var topButton = document.getElementById("top-button");
    var scrollPosition = window.pageYOffset;
    var windowHeight = window.innerHeight;
        
    if(scrollPosition > windowHeight / 4) {
        // Removing the 'hidden' class to make the button visible
        topButton.className = "";
    } else {
        // Applying the 'hidden' class to make the button hidden
        topButton.className = "hidden";
    }
});

// Makes clicking on a photo show it in fullscreen view
var photoElements = document.getElementById("photos-grid").children;
for(var i = 0; i < photoElements.length; i++) {
    photoElements[i].addEventListener("click", function(){
        // Changes URL to load the images with higher resolutions
        var photoUrl = this.getAttribute("src").replace("/thumbs/", "/photos/");
        
        var fullscreenPhoto = document.getElementById("photo-fullscreen");
        fullscreenPhoto.children[0].setAttribute("src", photoUrl);
        document.getElementById("dim").classList = "";
        document.getElementById("loading-icon").classList = "";
        
        // Runs after image is fully loaded
        fullscreenPhoto.children[0].addEventListener("load", function() {
            // Removing the 'hidden' class to make the image visible
            fullscreenPhoto.classList = "";
            document.getElementById("closePhotoButton").classList = "";
            // Recalculates image proportions
            resizePhoto();
            // Applying the 'hidden' class to make the loading icon hidden
            document.getElementById("loading-icon").classList = "hidden";
        });
    });
}

// Closes the fullscreen view when clicking on the X in the top-right corner
document.getElementById("closePhotoButton").addEventListener("click", closePhoto);

// Closes the fullscreen view when clicking anywhere outside the photo
document.getElementById("dim").addEventListener("click", closePhoto);

// Re-calculates fullscreen view dimensions when window is resized
window.addEventListener('resize', resizePhoto);