const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;

var world,engine;
var ball,ground;


function setup() {

  createCanvas(800,400);
 
  engine=Engine.create();
  world=engine.world;

  var ground_option={
    isStatic:true

  }
  ground=Bodies.rectangle(400,380,800,20,ground_option);
  World.add(world,ground);
   
  var ball_option={
    restitution:4.0
  }
  ball=Bodies.circle(400,200,30,ball_option);
  World.add(world,ball);
}

function draw() {
  background("black");  
  Engine.update(engine);
  fill("green");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  fill("purple");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30);
}