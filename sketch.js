
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var radius = 40

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
	groundObj =  new Ground(width/2,650,width,40);
	left = new Ground(700,600,20,120);
	right = new Ground(500,600,20,120)

	var ball_option = {
		isStatic : false,
		restitution : 0.3,
		friction:0,
		density:1.2
	   
		
	  }
	


	ball = Bodies.circle(200,200,radius/2,ball_option)
	
  World.add(world,ball)

  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x,ball.position.y,radius,radius);
  
  groundObj.display()
  left.display();
 right.display()
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,ball.position,{x:60,y:-60})

	}
}

