function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
}




function draw() {
	background(255)
	
	var count =0
	for(x=0;x<width;x=x+100){
	for(y=0;y<height;y=y+160){	
	count=count+1
	
	
	
	noFill()
		strokeWeight(3)
		stroke(55,200,150)
	ellipse(85+x,65+y,160,125+sin(frameCount/50)*100);
	
		
		stroke(5,99,200)
	triangle(10+x, 90+y, 90+x, 2+y, 155+x, 90+y)	
		stroke(255,70,55)
	rect(5+x,55+y,160,100+sin(frameCount/50)*100)
	}
	}
}




