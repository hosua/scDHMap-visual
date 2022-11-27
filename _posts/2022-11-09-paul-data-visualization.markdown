---
layout: post
title:  "Paul Data Visualization"
date:   2022-11-09 15:15:21 -0500
categories: article
---


<!-- For more information about the gif play/pause button library (gifa11y) being used,
	please see https://github.com/adamchaboryk/gifa11y -->

<!-- html elements can be inserted anywhere (before main, in main, after main) -->
<!-- However, if you want any gifs with a play/pause button, they must go after <main class="container"> -->
Paul data contains about 2000 cells profiled from murine bone marrow. 
The authors identified 19 clusters in the data and we projected the Paul data to 2D Poincaré space by using scDHMap. 
The data has predefined root cell and three branches: two long branches and one short trunk.

---
<main class="container">
	<hr>
	<div>
	<br>
		<h2>Pre-training</h2>
		<img loading="lazy" src="/scDHMap-visual/img/paul_pre_training_counter.gif" class="card-img-top gifa11y-paused" alt="Paul pre-training">
		<p> In the pre-training stage, only the ZINB autoencoder is optimized. </p>
		
		<p> You can see the effects of different perplexity settings below. </p>
		<div class="slideshow-div">
			<div class="slideshow-container">
				<div class="pre-slides fade">
					<div class="numbertext">1 / 12</div>
					<img src="/scDHMap-visual/img/pre-latent-2.jpg" style="width:100%">
					<div class="text">Perplexity = 2</div>
				</div>

				<div class="pre-slides fade">
					<div class="numbertext">2 / 12</div>
					<img src="/scDHMap-visual/img/pre-latent-5.jpg" style="width:100%">
					<div class="text">Perplexity = 5</div>
				</div>

				<div class="pre-slides fade">
					<div class="numbertext">3 / 12</div>
					<img src="/scDHMap-visual/img/pre-latent-10.jpg" style="width:100%">
					<div class="text">Perplexity = 10</div>
				</div>

				<div class="pre-slides fade">
					<div class="numbertext">4 / 12</div>
					<img src="/scDHMap-visual/img/pre-latent-20.jpg" style="width:100%">
					<div class="text">Perplexity = 20</div>
				</div>

				<div class="pre-slides fade">
					<div class="numbertext">5 / 12</div>
					<img src="/scDHMap-visual/img/pre-latent-30.jpg" style="width:100%">
					<div class="text">Perplexity = 30</div>
				</div>

				<div class="pre-slides fade">
					<div class="numbertext">6 / 12</div>
					<img src="/scDHMap-visual/img/pre-latent-40.jpg" style="width:100%">
					<div class="text">Perplexity = 40</div>
				</div>

				<div class="pre-slides fade">
					<div class="numbertext">7 / 12</div>
					<img src="/scDHMap-visual/img/pre-latent-50.jpg" style="width:100%">
					<div class="text">Perplexity = 50</div>
				</div>

				<div class="pre-slides fade">
					<div class="numbertext">8 / 12</div>
					<img src="/scDHMap-visual/img/pre-latent-60.jpg" style="width:100%">
					<div class="text">Perplexity = 60</div>
				</div>

				<div class="pre-slides fade">
					<div class="numbertext">9 / 12</div>
					<img src="/scDHMap-visual/img/pre-latent-70.jpg" style="width:100%">
					<div class="text">Perplexity = 70</div>
				</div>

				<div class="pre-slides fade">
					<div class="numbertext">10 / 12</div>
					<img src="/scDHMap-visual/img/pre-latent-80.jpg" style="width:100%">
					<div class="text">Perplexity = 80</div>
				</div>

				<div class="pre-slides fade">
					<div class="numbertext">11 / 12</div>
					<img src="/scDHMap-visual/img/pre-latent-90.jpg" style="width:100%">
					<div class="text">Perplexity = 90</div>
				</div>

				<div class="pre-slides fade">
					<div class="numbertext">12 / 12</div>
					<img src="/scDHMap-visual/img/pre-latent-100.jpg" style="width:100%">
					<div class="text">Perplexity = 100</div>
				</div>

				<a class="prev" onclick="plusSlides(-1, 'pre-slides', 'pre')">&#10094;</a>
				<a class="next" onclick="plusSlides(1, 'pre-slides', 'pre')">&#10095;</a>
			</div>
			<br>

			<div style="text-align: center">
				<span class="pre dot" onclick="currentSlide(1 , 'pre-slides', 'pre')"></span>
				<span class="pre dot" onclick="currentSlide(2 , 'pre-slides', 'pre')"></span>
				<span class="pre dot" onclick="currentSlide(3 , 'pre-slides', 'pre')"></span>
				<span class="pre dot" onclick="currentSlide(4 , 'pre-slides', 'pre')"></span>
				<span class="pre dot" onclick="currentSlide(5 , 'pre-slides', 'pre')"></span>
				<span class="pre dot" onclick="currentSlide(6 , 'pre-slides', 'pre')"></span>
				<span class="pre dot" onclick="currentSlide(7 , 'pre-slides', 'pre')"></span>
				<span class="pre dot" onclick="currentSlide(8 , 'pre-slides', 'pre')"></span>
				<span class="pre dot" onclick="currentSlide(9 , 'pre-slides', 'pre')"></span>
				<span class="pre dot" onclick="currentSlide(10, 'pre-slides', 'pre')"></span>
				<span class="pre dot" onclick="currentSlide(11, 'pre-slides', 'pre')"></span>
				<span class="pre dot" onclick="currentSlide(12, 'pre-slides', 'pre')"></span>
			</div>
		</div> <!-- slideshow-div -->
	</div>
	
	<hr>
	<div>
	<br>
		<h2>Training</h2>
		<img loading="lazy" src="/scDHMap-visual/img/paul_training_counter.gif" class="card-img-top gifa11y-paused" alt="Paul pre-training">

		<p> The training stage optimizes the whole model, including the hyperbolic t-SNE regularization. </p>

			<p> You can see the effects of different perplexity settings below. </p>
			<div class="slideshow-div">
				<div class="slideshow-container">
					<div class="final-slides fade">
						<div class="numbertext">1 / 12</div>
						<img src="/scDHMap-visual/img/final-latent-2.jpg" style="width:100%">
						<div class="text">Perplexity = 2</div>
					</div>

					<div class="final-slides fade">
						<div class="numbertext">2 / 12</div>
						<img src="/scDHMap-visual/img/final-latent-5.jpg" style="width:100%">
						<div class="text">Perplexity = 5</div>
					</div>

					<div class="final-slides fade">
						<div class="numbertext">3 / 12</div>
						<img src="/scDHMap-visual/img/final-latent-10.jpg" style="width:100%">
						<div class="text">Perplexity = 10</div>
					</div>

					<div class="final-slides fade">
						<div class="numbertext">4 / 12</div>
						<img src="/scDHMap-visual/img/final-latent-20.jpg" style="width:100%">
						<div class="text">Perplexity = 20</div>
					</div>

					<div class="final-slides fade">
						<div class="numbertext">5 / 12</div>
						<img src="/scDHMap-visual/img/final-latent-30.jpg" style="width:100%">
						<div class="text">Perplexity = 30</div>
					</div>

					<div class="final-slides fade">
						<div class="numbertext">6 / 12</div>
						<img src="/scDHMap-visual/img/final-latent-40.jpg" style="width:100%">
						<div class="text">Perplexity = 40</div>
					</div>

					<div class="final-slides fade">
						<div class="numbertext">7 / 12</div>
						<img src="/scDHMap-visual/img/final-latent-50.jpg" style="width:100%">
						<div class="text">Perplexity = 50</div>
					</div>

					<div class="final-slides fade">
						<div class="numbertext">8 / 12</div>
						<img src="/scDHMap-visual/img/final-latent-60.jpg" style="width:100%">
						<div class="text">Perplexity = 60</div>
					</div>

					<div class="final-slides fade">
						<div class="numbertext">9 / 12</div>
						<img src="/scDHMap-visual/img/final-latent-70.jpg" style="width:100%">
						<div class="text">Perplexity = 70</div>
					</div>

					<div class="final-slides fade">
						<div class="numbertext">10 / 12</div>
						<img src="/scDHMap-visual/img/final-latent-80.jpg" style="width:100%">
						<div class="text">Perplexity = 80</div>
					</div>

					<div class="final-slides fade">
						<div class="numbertext">11 / 12</div>
						<img src="/scDHMap-visual/img/final-latent-90.jpg" style="width:100%">
						<div class="text">Perplexity = 90</div>
					</div>

					<div class="final-slides fade">
						<div class="numbertext">12 / 12</div>
						<img src="/scDHMap-visual/img/final-latent-100.jpg" style="width:100%">
						<div class="text">Perplexity = 100</div>
					</div>

					<a class="prev" onclick="plusSlides(-1, 'final-slides', 'final')">&#10094;</a>
					<a class="next" onclick="plusSlides(1, 'final-slides', 'final')">&#10095;</a>
				</div>
				<br>

				<div style="text-align: center">
					<span class="final dot" onclick="currentSlide(1 , 'final-slides', 'final')"></span>
					<span class="final dot" onclick="currentSlide(2 , 'final-slides', 'final')"></span>
					<span class="final dot" onclick="currentSlide(3 , 'final-slides', 'final')"></span>
					<span class="final dot" onclick="currentSlide(4 , 'final-slides', 'final')"></span>
					<span class="final dot" onclick="currentSlide(5 , 'final-slides', 'final')"></span>
					<span class="final dot" onclick="currentSlide(6 , 'final-slides', 'final')"></span>
					<span class="final dot" onclick="currentSlide(7 , 'final-slides', 'final')"></span>
					<span class="final dot" onclick="currentSlide(8 , 'final-slides', 'final')"></span>
					<span class="final dot" onclick="currentSlide(9 , 'final-slides', 'final')"></span>
					<span class="final dot" onclick="currentSlide(10, 'final-slides', 'final')"></span>
					<span class="final dot" onclick="currentSlide(11, 'final-slides', 'final')"></span>
					<span class="final dot" onclick="currentSlide(12, 'final-slides', 'final')"></span>
				</div>
			</div> <!-- slideshow-div -->
		</div>


	<!--Supply play/pause button with elements existing on page. 
		These lines are necessary for the buttons to actually show up. Do not delete any of the lines below. -->
	<template id="playsvg" hidden>
		<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				class="bi bi-play-circle-fill"
				viewBox="0 0 16 16"
				><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
		</svg>
	</template>
	<template id="pausesvg" hidden>
		<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				class="bi bi-pause-circle-fill"
				viewBox="0 0 16 16"
				><path
						 d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z"/>
		</svg>
	</template>


<script type="text/javascript" src="/scDHMap-visual/gifa11y.min.js"></script>
<script>
	/* If you want to change the color of the play/pause buttons, edit these values accordingly */
	var gifa11y = new Gifa11y({
		container: 'main',
		buttonBackground: 'blue',
		buttonBackgroundHover: 'rgb(237,0,0)',
		buttonIconColor: '#ffffff',
		buttonPlayIconID: 'playsvg'
	});
</script>

<link rel="stylesheet" type="text/css" href="/scDHMap-visual/slideshow-styles.css">
<script type="text/javascript" src="/scDHMap-visual/slideshow.js"></script>

</main>

