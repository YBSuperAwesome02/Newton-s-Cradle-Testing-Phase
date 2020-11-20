var bob1, bob2, bob3, bob4, bob5;
var roof;
var rope1, rope2, rope3, rope4, rope5;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1500, 1000);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	
	bob1 = new Bob (425, 600, 165)
	bob2 = new Bob (600, 600, 165)
	bob3 = new Bob (775, 600, 165)
	bob4 = new Bob (950, 600, 165)
	bob5 = new Bob (1125, 600, 165)

	roof = new Roof(750, 75, 1100, 50)

	rope1 = new Rope(bob1.body,{x:425, y:100}, 'isStatic: true');
	rope2 = new Rope(bob2.body,{x:600, y:100});
	rope3 = new Rope(bob3.body,{x:775, y:100});
	rope4 = new Rope(bob4.body,{x:950, y:100});
	rope5 = new Rope(bob5.body,{x:1125, y:100});

}


function draw() {
  rectMode(CENTER);
  background("white");
 
	bob1.display()
	bob2.display()
	bob3.display()
	bob4.display()
	bob5.display()

	roof.display()

	fill("white")
	rope1.display()
	rope2.display()
	rope3.display()
	rope4.display()
	rope5.display()

	drawSprites()

	//bob1.keyPressed()
	//bob5.keyPressed()

}

function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-50, y:-50});
	}

	/*if(keyCode === DOWN_ARROW){
		Matter.Body.applyForce(bob5.body, bob5.body.position, {x:50, y:-50});
	}*/

}
