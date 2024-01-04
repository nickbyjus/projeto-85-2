canvas =document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

greencar_width = 75;
greencar_height = 100;

backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";

greencar_x = 5;
greencar_y= 255;

function add() {
	background_imgTag = nem Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;

	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadBackground;
	greencar_imgTag.src = background_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height)
}

function uploadgreenCar() {
	ctx.drawImage(greencar_imgTag, greencar_x, greencar_y, greencar_width, greencar_height);

	
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y >=0)
	{
		greencar_y = greencar_y - 10;
		console.log("When up arrow is pressed,  x = " +greencar_x +" | y = " +greencar_y);
		uploadBackground();
		uploadgreenCar();
	}
}

function down()
{
	if(greencar_y >=350)
	{
		greencar_y = greencar_y + 10;
		console.log("When down arrow is pressed,  x = " +greencar_x +" | y = " +greencar_y);
		uploadBackground();
		uploadgreenCar();
	}
}

function left()
{
	if(greencar_y >=0)
	{
		greencar_y = greencar_y - 10;
		console.log("When left arrow is pressed,  x = " +greencar_x +" | y = " +greencar_y);
		uploadBackground();
		uploadgreenCar();
	}
}

function right()
{
	if(greencar_y >=750)
	{
		greencar_y = greencar_y + 10;
		console.log("When right arrow is pressed,  x = " +greencar_x +" | y = " +greencar_y);
		uploadBackground();
		uploadgreenCar();
	}
}
