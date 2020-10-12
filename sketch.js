const World= Matter.World;
const Engine= Matter.Engine;
const Bodies= Matter.Bodies;

var engine, world;
var ground;
var ball ; 

function setup() {
  createCanvas(400,400) ; 
  engine=Engine.create();
  world= engine.world;
  var ball_option = {
    restitution : 1 
  }
  ball = Bodies.circle(200,100,20, ball_option) ; 
  World.add(world,ball); 
  var option= {
    isStatic: true
  }
  ground= Bodies.rectangle(200,380,400,10, option);
  World.add(world,ground);


  console.log(ground);
}

function draw() {
  background(0,0,0); 
  Engine.update(engine);
  rectMode(CENTER) ;  
  rect(ground.position.x, ground.position.y, 400,10);
  ellipseMode(RADIUS);
  ellipse(ball.position.x , ball.position.y , 20,20) ;

}