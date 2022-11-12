let slideNumber = 1;
showSlide(slideNumber);

function directionIcon(n){
    showSlide(slideNumber += n);
}

function currentSlide(n){
    showSlide(slideNumber = n);
}

function showSlide(n){
    let i;
    let carousel = document.getElementsByClassName("first-image");
    
    if (n > carousel.length){
        slideNumber = 1
    }
    if (n < 1){
        slideNumber = length
    }
    for (i = 0; i < carousel.length; i++){
        carousel[i].style.display = "none";
    }
    carousel[slideNumber-1].style.display = "block";
}