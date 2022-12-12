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

<strong> Note: </strong> You can pause and play the animations by clicking on them.
<div>
<br>
	<h2>Pre-training</h2>
	<div class="gif-container">
		<canvas class="pre-training-canvas" id="pre-training-canvas"> </canvas>
		<div id="pause-btn" class="pause-btn"></div>
	</div>
	<p> In the pre-training stage, only the ZINB autoencoder is optimized. <br>
<div>
<br>
<hr>
<br>
	<h2>Training</h2>
	<canvas class="training-canvas" id="training-canvas">

	</canvas>

	<p> The training stage optimizes the whole model, including the hyperbolic t-SNE regularization. </p>

	<p> The images below are the final embeddings of different perplexity settings. </p> <br>
	<!-- <p class="unselectable" style="pointer-events:none; position:absolute; left:37%;"> Perplexity</p> -->
	<div id="final-slider-div" style="width:75%">
		<div class="range">
			<input id="final-slider" type="range" min="0" max="11">
			<div class="ticks">
				<span style="font-size:80%;" class="tick">2</span>
				<span style="font-size:80%;" class="tick">5</span>
				<span style="font-size:80%;" class="tick">10</span>
				<span style="font-size:80%;" class="tick">20</span>
				<span style="font-size:80%;" class="tick">30</span>
				<span style="font-size:80%;" class="tick">40</span>
				<span style="font-size:80%;" class="tick">50</span>
				<span style="font-size:80%;" class="tick">60</span>
				<span style="font-size:80%;" class="tick">70</span>
				<span style="font-size:80%;" class="tick">80</span>
				<span style="font-size:80%;" class="tick">90</span>
				<span style="font-size:80%;" class="tick">100</span>
			</div>
		</div>
		<img id="final-img" src="/scDHMap-visual/img/final-latent-50.jpg">
	</div> <!-- end final-slider div -->
	
	<br>
	<p> The images below are the final embeddings of different gamma settings. </p> <br>
	<div id="gamma-slider-div" style="width:75%">
		<div class="range">
			<input id="gamma-slider" type="range" min="0" max="8">
			<div class="ticks">
				<span style="font-size:80%;" class="tick">0.01</span>
				<span style="font-size:80%;" class="tick">0.05</span>
				<span style="font-size:80%;" class="tick">0.10</span>
				<span style="font-size:80%;" class="tick">0.50</span>
				<span style="font-size:80%;" class="tick">1	</span>
				<span style="font-size:80%;" class="tick">5</span>
				<span style="font-size:80%;" class="tick">10</span>
				<span style="font-size:80%;" class="tick">50</span>
				<span style="font-size:80%;" class="tick">100</span>
			</div>
		</div>
		<img id="gamma-img" src="/scDHMap-visual/img/gamma-latent-1.jpg">
	</div> <!-- end gamma-slider div -->

<style>
	
</style>
<link rel="stylesheet" type="text/css" href="/scDHMap-visual/slider.css">
<script type="text/javascript" src="/scDHMap-visual/slideshow.js"></script>
<script type="text/javascript" src="/scDHMap-visual/gifler.js"></script>
<script type="text/javascript" src="/scDHMap-visual/run-gifler.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
	var perpMap = new Map([
		[0, 2], [1, 5], [2, 10], [3, 20], [4, 30],
		[5, 40], [6, 50], [7, 60], [8, 70], [9, 80], 
		[10, 90], [11, 100]
	]);

	var gammaMap = new Map([
		[0, 0.01], [1, 0.05], [2, 0.10], [3, 0.50], 
		[4, 1], [5, 5], [6, 10], [7, 50], [8, 100]
	]);


	$("#final-slider").on("change", function(e){
		let key = parseInt($(this).val());
		let val = perpMap.get(key);
		console.log(`${key} : ${val}`);
		$("#final-img").attr("src", `/scDHMap-visual/img/final-latent-${val}.jpg`);
	});

	$("#gamma-slider").on("change", function(e){
		let key = parseInt($(this).val());
		let val = gammaMap.get(key);
		console.log(`${key} : ${val}`);
		$("#gamma-img").attr("src", `/scDHMap-visual/img/gamma-latent-${val}.jpg`);
	});

</script>



