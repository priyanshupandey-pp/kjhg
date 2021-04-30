const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var paper,dustbin,dustbin1,dustbin2,a;
var ground;

function setup() {
	createCanvas(800, 400);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);


	//Create the Bodies Here.
	
	paper=new Paper(100,300,15,20);
	dustbin=new Dustbin(700,350,3,10,{isStatic:true})
	dustbin1= new Dustbin(600,350,3,10,{isStatic:true})
	dustbin12= new Dustbin(650,460,3,25,{isStatic:true})

World.add(world,dustbin,dustbin1,dustbin2)
	ground=Bodies.rectangle(width/2,400,width,10,
{
	isStatic:true
})
	World.add(world,ground);
}


function draw() {
  background(0);	
  Engine.update(engine);
  rectMode(CENTER);
  paper.display();
  dustbin.display();
  dustbin1.display();
  dustbin12.display();


 
}
function keyPressed () {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:190,y:-199});
	}
}