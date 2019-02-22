var socket;
var btn;



function setup() {
	createCanvas(600,600);
	background(0);
	fill(255);
	noStroke();
	socket = io.connect('http://localhost:3000');
	btn = createButton('red');

	btn.mousePressed(()=>{
		background(255,0,0);
		var data = {
			r:255,
			g:0,
			b:0
		}
	
		socket.emit('mouse',data);

	});

	


	socket.on('mouse',(data) => {
		background(data.r,data.g,data.b);
		
		


	});
}


function mouseDragged(){
	//ellipse(mouseX,mouseY,30);
	
	//console.log(`${mouseX},${mouseY}`);
}
function draw() {

}