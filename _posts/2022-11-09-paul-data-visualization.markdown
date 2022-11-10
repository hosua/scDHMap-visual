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
	<div>
	<br>
		<h2>Pre-training</h2>
		<img loading="lazy" src="/scDHMap-visual/img/paul_pre_training_counter.gif" class="card-img-top gifa11y-paused" alt="Paul pre-training">

		<p>
			In the pre-training stage, only the ZINB autoencoder is optimized.
		</p>
	</div>
	
	<hr>
	<div>
	<br>
		<h2>Training</h2>
		<img loading="lazy" src="/scDHMap-visual/img/paul_training_counter.gif" class="card-img-top gifa11y-paused" alt="Paul pre-training">

		<p>
			The training stage optimizes the whole model, including the hyperbolic t-SNE regularization.
		</p>
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
</main>
