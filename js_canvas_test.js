function draw() {
	const ctx = document.getElementById("canvas1").getContext("2d");
	
	
	x = linspace(0,1,100);
	y = afunction(x);
	console.log(y);
	
	
	draw_graph(ctx, x, y);
}

// function draw2() {
	// const ctx = document.getElementById("canvas2").getContext("2d");
	
	
	// x = linspace(0,1,100);
	// y = afunction(x);
	// console.log(y);
	
	
	// draw_graph(ctx, x, y);
// }

function linspace(xa,xb,num) {
	
	var x = new Array(num);
	
	for (let i = 0; i < num; i++) {
		
		x[i] = xa + (xb-xa)/num*i;
		
	}
	
	return x;
}

function afunction(x) {
	
	var y = new Array(x.length);
	
	for (let i = 0; i < x.length; i++) {
		
		y[i] = x[i]*x[i];
		
	}
	
	return y;
}

function max(x) {
	
	max_val = x[0];

	for (let i = 0; i < num; i++) {
		if (max_val < x[i]) {
			max_val = x[i];
			max_val = x[i];
		}
	}
	
	return max_val
	
}

function draw_graph(ctx, x, y) {
	
	xa = 0;
	xb = 1;
	ya = 0;
	yb = 1;
	
	draw_axes(ctx, xa, ya, xb, yb);
	draw_curve(ctx, x,y, 100,500, 600, 400);
}

function draw_axes(ctx, xa, ya, xb, yb) {
	
	ctx.font = "12px serif";
	
	ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
	
	ctx.strokeText(xa.toString(), 98, 520);
	ctx.strokeText(xb.toString(), 698, 520);
	ctx.strokeText(ya.toString(), 90, 503);
	ctx.strokeText(yb.toString(), 90, 103);
	
	
	draw_line(ctx, 'black', 100, 500, 100, 100, 1);
	draw_line(ctx, 'black', 100, 500, 700, 500, 1);
	draw_line(ctx, 'black', 700, 500, 700, 100, 1);
	draw_line(ctx, 'black', 700, 100, 100, 100, 1);
	
	draw_line(ctx, 'black', 100, 500, 100, 505, 1);
	draw_line(ctx, 'black', 700, 500, 700, 505, 1);
	
	draw_line(ctx, 'black', 100, 500, 95, 500, 1);
	draw_line(ctx, 'black', 100, 100, 95, 100, 1);
	
}

function draw_line(ctx, color, xa, ya, xb, yb, linewidth) {
	
	ctx.strokeStyle = color;
    ctx.lineWidth = linewidth;
	ctx.beginPath();
	ctx.moveTo(xa, ya);
	ctx.lineTo(xb, yb);
	ctx.stroke();
}


function draw_curve(ctx, x, y, x0, y0, xscale, yscale) {
	
	ctx.strokeStyle = 'red';
    ctx.lineWidth = 5;
	
	for (let i = 0; i < x.length; i++) {
		
		ctx.beginPath();
		ctx.moveTo(x[i]*xscale + x0, -y[i]*yscale + y0);
		ctx.lineTo(x[i-1]*xscale + x0, -y[i-1]*yscale + y0);
		ctx.stroke();
		
	}
}
