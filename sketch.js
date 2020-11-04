const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1= new Box(200,100,20,20);
    box2=new Box(210,50,20,60);

    ground= new Ground(200,350,400,20);

}

function draw(){
    background(0);
    Engine.update(engine);

    console.log(box2.body.angle);
    
    box1.display();
    box2.display();
    ground.display();
    
}