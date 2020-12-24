var engine;
var world;



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var ground, rope1, ball, platform, engine, world;
var block1, block2,block3,block4,block5,block6;
var block7,block8,block9,block10,block11,block12,block13;


function preload()
{
	
}

function setup() {
	createCanvas(1360, 600);

	engine = Engine.create();
	world = engine.world;

  ground = new Ground(400,height,800,10)
  
  platform = new Ground(560,450,250,10)


  ball = new Bob (150,200,30)
  
  rope1 = new rope(ball.body,{x:200,y:50})
  
  block1 = new Block(470,360,30,40)
  block2 = new Block(500,360,30,40)
  block3 = new Block(530,360,30,40)
  block4 = new Block(560,360,30,40)
  block5 = new Block(590,360,30,40)
  block6 = new Block(620,360,30,40)
  block7 = new Block(650,360,30,40)

 
  block9 = new Block(500,338,30,40)
  block10 = new Block(530,338,30,40)
  block11 = new Block(560,338,30,40)
  block12 = new Block(590,338,30,40)
  block13 = new Block(620,338,30,40)
	
	Engine.run(engine);
  
}


function draw() {
  
  background(180);

  ground.display();
 
  ball.display();

  platform.display() 

  block1.display();
  block2.display();
  block3.display();
  block4.display();

  block5.display();
  block6.display();
  block7.display();
 
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();

  rope1.display();

  drawSprites();
 
}

function mouseDragged(){
 
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
 
}

