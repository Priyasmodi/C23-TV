
  
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

var box1,box2;
var g

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

   box1 = new Box(100,100,50,50);
   box2= new Box(120,150,30,30)
   g= new Ground(100,380,400,10)
}

function draw(){
    background(0);
    Engine.update(engine);
   
    box1.display();
    box2.display();
    g.display();
}

