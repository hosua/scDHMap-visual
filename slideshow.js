let slideIndex = 1;
showSlides(slideIndex, "pre-slider", "pre");
showSlides(slideIndex, "final-slider", "final");

// Next/previous controls
function plusSlides(n, slide_class, dot_class) {
	showSlides(slideIndex += n, slide_class, dot_class);
}

// Thumbnail image controls
function currentSlide(n, slide_class, dot_class) {
	showSlides(slideIndex = n, slide_class, dot_class);
}

function showSlides(n, slide_class, dot_class) {
	let i;
	let slides = document.getElementsByClassName(slide_class);
	let dots = document.getElementsByClassName(`${dot_class} dot`);
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
}


