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