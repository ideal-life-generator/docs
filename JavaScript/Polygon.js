	function polygon(c,n,x,y,r,angle,counterclockwise){
		angle = angle||0;
		counterclockwise = counterclockwise||false;
		c.moveTo(x + r*Math.sin(angle),y - r*Math.cos(angle));
		var delta = 2*Math.PI/n;
		for(var i=1;i<n;i++){
			angle += counterclockwise?-delta:delta;
			c.lineTo(x+r*Math.sin(angle),y-r*Math.cos(angle));
		}
		c.closePath();
	};