//spot.js 0.1
//Copyright 2013, DK
//spot may be freely distributed under the MIT License


Box = (function(){
	//Constructor
	function Box(radius, x, y){
		this.el = document.createElement('div');
		var radius = this.el.radius = parseFloat(radius) || 30;
		var x = this.el.x = x || Math.floor(Math.random()*window.innerWidth-radius);
		var y = this.el.y = y || Math.floor(Math.random()*window.innerHeight-radius);
		var r = Math.floor(Math.random()*255);
		var g = Math.floor(Math.random()*255);
		var b = Math.floor(Math.random()*255);
		var self = this.el;
		
		//initialize
		this.el.draw = function(){
			$(self).css({
				'position': 'absolute',
				'left': self.x,
				'top': self.y,
				'width': self.radius*2,
				'height': self.radius*2,
				'background-color': 'rgb('+r+','+g+','+b+')'
			});
		}
		this.el.draw();

		//size behavior
		this.el.grow = this.el.bigger = Box.prototype.grow;
		this.el.shrink = this.el.smaller = Box.prototype.shrink;
		this.el.fade = function(d, to){
			d = d || 10;
			to = parseFloat(to) || 0.01;
			var self = this;
			if (parseFloat($(this).css('opacity')) > to){
				$(this).css('opacity', '-=0.01');
				setTimeout(function(){
					self.fade();
				}, d);
			}
		}

		$('body').append(this.el);
		return this.el;
	}
	Box.prototype.grow = function(d){
		d = d || 20;
		$(this).css({
			'left': '-='+(d/2),
			'top': '-='+(d/2),
			'width': '+='+d,
			'height': '+='+d,
		});
		this.radius += d;
	}
	Box.prototype.shrink = function(d){
		d = d || 20;
		$(this).css({
			'left': '+='+(d/2),
			'top': '+='+(d/2),
			'width': '-='+d,
			'height': '-='+d,
		});
		this.radius -= d;
	}
	return Box;
})();


Dot = (function(){
	//constructor
	function Dot(radius, x, y){
		var radius = parseFloat(radius) || 30;
		var dot = Box(radius, x, y);
		$(dot).css({'border-radius': radius});

		dot.grow = function(d){
			d = d || 20;
			Box.prototype.grow.apply(this, arguments);
			$(this).css({'border-radius': '+='+d});
		}
		dot.shrink = function(d){
			d = d || 20;
			Box.prototype.shrink.apply(this, arguments);
			$(this).css({'border-radius': '-='+d});
		}
		return dot;
	}
	Dot.prototype = new Box();
	return Dot;
})();