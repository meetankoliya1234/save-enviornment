
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

    paper = new Paper(100,200,20,20);

    dustbin = new Dustbin(600,370,200,10);
    dustbin2 = new Dustbin(500,330,10,100);
    dustbin3 = new Dustbin(700,330,10,100);

    ground = new Ground(400,380,800,10);
	Engine.run(engine);
  
  keyPressed();
}

function keyPressed(){

  if(keyCode === UP_ARROW){

    Matter.Body.applyForce(paper.body,paper.body.position,{x:20,y:-20});
  }
}



function draw() {
  rectMode(CENTER);
  background(0);
  
   paper.display();
   dustbin.display();
   dustbin2.display();
   dustbin3.display();
   ground.display();
}



