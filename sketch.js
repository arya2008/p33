const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var balls=[];
var plinkos=[];
var divider=[];
var divisionHeight=300;
var score=0;
function setup() {
  createCanvas(800,800);
  Text("Score:"+score,600,100)
  if(ball.x<300){
    score=score+100
  }
  if(ball.x>300,x<600){
    score=score+100
  }
  if(ball.x>600){
    score=score+200
  }
  line=createSprite(400, 450, 1000, 50);


  for(var k=0;k<=width;k=k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }
  for(var j=40;j<=width;j=j+50){
    plinkos.push(new plinkos(j,75))
  }
  for(var j=15;j<=width;j=j+50){
    plinkos.push(new plinkos(j,175))
  }
  for(var j=40;j<=width;j=j+50){
    plinkos.push(new plinkos(j,75))
  }
  for(var j=15;j<=width;j=j+50){
    plinkos.push(new plinkos(j,175))
  }
  for(var j=0;j<balls.length;j++){
    particles[j].display();
  }
  for(var k=0;0<divisions.length;k++){
    divisions[k].display();
  }
}




function draw() {
  background(255,255,255);  
  drawSprites();
  plinkos.display();
  
}