const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbinObj, groundObject;
var world;
var paper;

function setup() {
	createCanvas(1500, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	groundObject = new Ground(width/2,670,width,20);
	dustbinObj = new Dustbin(1300,650);
	paper = new Paper(400, 450, 20);

	Engine.run(engine);
}


function draw() {
  	rectMode(CENTER);
  	background(230);

	if (keyWentDown(UP_ARROW)) {
		Body.applyForce(paper.body, paper.body.position, {x:80, y: -90});
	}

  	groundObject.display();
  	dustbinObj.display();
  	paper.display();
}

