const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine, world, paper1, ground, dustbin1, dustbin2, dustbin3; dustbin4;
function setup() {
    createCanvas(windowWidth,windowHeight);
    rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.
    paper1 = new Paper(100,600,20, 20);
    ground = new Ground(400,690,3000,30);
    dustbin1 = new Dustbin(1000,670, 100, 20);
    dustbin2 = new Dustbin(950,625,20,110);
    dustbin3 = new Dustbin(1050,630,20,100)
    dustbin4 = new Dustbin(1090,580,100,20)
    dustbin5 = new Dustbin(915,580,50,20)
    dustbin6 = new Dustbin(900,615,20,50)
    dustbin7 = new Dustbin(885,630,50,20)
    dustbin8 = new Dustbin(850,645,20,50)
    dustbin9 = new Dustbin(830,670,60,20)
    Engine.run(engine);
  
}

function draw() {
  
  rectMode(CENTER);
  
  background("yellow");
  
  //Engine.update(engine);
    
  paper1.display();

  ground.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
 dustbin4.display();
 dustbin5.display();
 dustbin6.display();
 dustbin7.display();
 dustbin8.display();
 dustbin9.display();
}

function keyPressed(){
    if (keyCode === UP_ARROW ) {
      Matter.Body.applyForce(paper1.body, paper1.body.position, {x: 82,y: -82})
    }
    
  }



