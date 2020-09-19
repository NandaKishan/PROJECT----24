
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground;
var dustbin1,dustbin2,dustbin3;
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100,350);

	ground = new Ground((height/2) + 50,height - 30);

	dustbin1 = new Dustbin(550,610,30,100);
	dustbin2 = new Dustbin(615,645,100,30);
	dustbin3 = new Dustbin(680,610,30,100);
	Engine.run(engine);
  
}


function draw() {
  background("black");
  Engine.update(engine);
  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

		if(keyDown(UP_ARROW)){
			Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
		}
	

  drawSprites();
}



