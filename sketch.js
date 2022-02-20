var database;
var engine,world;
var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const bodies = Matter.Bodies;
const Body = Matter.Body;

function setup(){
    createCanvas(800,600);

    database = firebase.database();

    engine = Engine.create();
    world = engine.world;

    ball = createSprite(100,100);
    ball.addImage(loadImage("images/Basketball.png"));
    ball.scale = 0.1;

    Engine.run(engine);
}

function draw(){
    background("black");
    drawSprites();
}