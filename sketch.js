const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.constraint;

var boy,tree,mango,sona;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	boy = new Boy(100,600,150,300);
	tree = new Tree(600,400,400,600);
	stone = new Stone(55,530,30,30);
	mango1 = new Mango(600,200,40,40);
	mango2 = new Mango(530,250,40,40);
	mango3 = new Mango(630,300,40,40);
	mango4 = new Mango(550,350,40,40);
	mango5 = new Mango(700,280,40,40);
	slingShot = new SlingShot(stone.body, {x:55, y:530});
	ground = new Ground(400,700,700,10);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  boy.display();
  tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  slingShot.display();
  ground.display();
  drawSprites();
 
}

function mouseDragged() {
	Matter.Body.setPosition(stone.body, {x: mouseX, y:mouseY})
}

function mousePressed() {
	slingShot.fly();
}

