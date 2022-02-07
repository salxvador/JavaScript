function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds -= 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if (seconds == -1) {
            alert("Times Up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}

//initialize the slideindex and run showslides fn.
//had trouble with this, I think the CSS runs 2ns, defaulting all images to opacity=0.
//so no image would display on initial page load. had to click a dot to get images to show.
//added onload event to HTML body to run showSlides() explicitly..
var slideIndex = 1;

// Next/Prev controls:
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//Thumbnail image controls:
function currentSlide(n) {
    showSlides(slideIndex = n);
}

//fn to show only 1 (active) image at a time:
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; //makes all images invisible
    }
    for (i=0; i < dots.length; i++) { //sets all images to 'inactive' (invisible)
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active"; //activates the image with matching index
}
showSlides(slideIndex);