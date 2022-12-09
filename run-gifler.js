var pre_training = gifler('/scDHMap-visual/img/paul_pre_training_counter.gif');
var training = gifler('/scDHMap-visual/img/paul_training_counter.gif');

var pre_training_canvas = document.getElementById("pre-training-canvas");
var pre_ctx = pre_training_canvas.getContext("2d");
pre_ctx.font = "20px Arial MS";
pre_ctx.fillStyle = "grey";
pre_ctx.textAlign = "left";
pre_ctx.fillText("Loading gif...", pre_training_canvas.width/2, pre_training_canvas.height/2);

var training_canvas = document.getElementById("pre-training-canvas");
var train_ctx = training_canvas.getContext("2d");
train_ctx.font = "20px Arial MS";
train_ctx.fillStyle = "grey";
train_ctx.textAlign = "left";
train_ctx.fillText("Loading gif...", training_canvas.width/2, training_canvas.height/2);

pre_training
	.animate('canvas.pre-training-canvas')
	.then(function(animator) {
		$('canvas.pre-training-canvas').click(function(){
			if(animator.running()){
				animator.stop();
			} else {
				animator.start();
			}
		});
		animator.stop();
	}).catch(error => {
		console.log("pre-training gif not working properly");
	});

training
	.animate('canvas.training-canvas')
	.then(function(animator) {
		$('canvas.training-canvas').click(function(){
			if(animator.running()){
				animator.stop();
			} else {
				animator.start();
			}
		});
	}).catch(error => {
		console.log("training gif not working properly");
	});

// training.animator.stop();
