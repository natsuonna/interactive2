(function(){
	var canvasBody = document.getElementById("canvas"),
			canvas = canvasBody.getContext("2d"),
			
			w = canvasBody.width = window.innerWidth,
			h = canvasBody.height = window.innerHeight,
			
			pi2 = Math.PI*2,
			tick = 0,
			gui = new dat.GUI(),
			stars = [],
			opts = {
				backgroundColor: "#111",
				starAmount: 1000,
				minSize: 0.5,
				minSpeed: 1,
				levelAmount: 5
			},
			Star = function(){
				this.pos = new Vector2(random(w), random(h));
				this.level = Math.ceil(Math.random()*opts.levelAmount);
				this.radius = this.level*opts.minSize;
				this.speed = new Vector2(this.level*opts.minSpeed, 0);
			};
	
	Star.prototype.update = function(){
		this.border();
		this.pos.add(this.speed);
	};
	Star.prototype.render = function(){
		canvas.beginPath();
		canvas.arc(this.pos.x, this.pos.y, this.radius, 0, pi2);
		canvas.closePath();
		canvas.fillStyle = "rgba(255,255,255,opacity)".replace("opacity", 1);		
		canvas.fill();
	};
	Star.prototype.border = function(){
		this.pos.x > w - this.radius ? this.reinit() : undefined;
	};
	Star.prototype.reinit = function(){
		this.pos = new Vector2(random(w)-w, random(h));
	};
	
	function populate(){
		stars = [];
		for(var i =0;i < opts.starAmount; stars[i++] = new Star());
	};
	function setup(){
		stats = new Stats();
		stats.showPanel( 0 );
		
		populate();
		console.log(stars)
		
		for(key in opts){
			gui.add(opts, key).onFinishChange(populate);
		}
		
		document.body.appendChild( stats.domElement );
		window.requestAnimationFrame(loop);
	};
	function loop(){
		stats.begin();
		canvas.fillStyle = opts.backgroundColor;
		canvas.fillRect(0,0,w,h);
		
		stars.map( function(S){
			S.update();
			S.render();
		})
		
		window.requestAnimationFrame(loop);
		stats.end();
	};
	setup();
	
	window.addEventListener("resize", function(){
		w = canvasBody.width = window.innerWidth;
		h = canvasBody.height = window.innerHeight;
	});
})();