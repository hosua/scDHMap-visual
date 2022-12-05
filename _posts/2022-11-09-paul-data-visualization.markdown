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
<div>
<br>
	<h2>Pre-training</h2>
	<canvas class="pre-training-canvas" id="pre-training-canvas">
	</canvas>
	<p> In the pre-training stage, only the ZINB autoencoder is optimized. <br>
	Note: You can pause and play the gif by clicking on it.</p>
	
	<p> The images below are the final embeddings of different perplexity settings for pre-training. </p>
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

---
<div>
<br>
	<h2>Training</h2>
	<canvas class="training-canvas">
	</canvas>

	<p> The training stage optimizes the whole model, including the hyperbolic t-SNE regularization. 
	Note: You can pause and play the gif by clicking on it.</p>

		<p> The images below are the final embeddings of different perplexity settings. </p>
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

<style>
	
</style>

<!-- <script type="text/javascript" src="/scDHMap-visual/gifa11y.min.js"></script> -->
<link rel="stylesheet" type="text/css" href="/scDHMap-visual/slideshow-styles.css">
<script type="text/javascript" src="/scDHMap-visual/slideshow.js"></script>
<script type="text/javascript" src="/scDHMap-visual/gifler.min.js"></script>
<script type="text/javascript" src="/scDHMap-visual/run-gifler.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

