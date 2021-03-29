const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var g;
var pa = [];
var pl = [];
var d = [];
var divivsionHeight = 300;
var txt = [500,100,200];
var score = 0;
var particleLimit = 5;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  
  
  
  world = engine.world;


  g = new Ground(200,600,800,20);

  

  for(var k = 0; k <=width; k = k +80) {
    d.push(new Divisions(k, height-divivsionHeight/2-200, 10, divivsionHeight));
  }

  for(var j=40;j <= width; j=j+50) {
    pl.push(new Plinkos(j , 75));
  }

  for(var j=15;j <= width-10; j=j+50) {
    pl.push(new Plinkos(j, 175));
  }
  
  for(var j=40;j <= width; j=j+50) {
    pl.push(new Plinkos(j , 250));
  }

  for(var j=15;j <= width-10; j=j+50) {
    pl.push(new Plinkos(j, 300));
  } 
}

function draw() {
  background(80);
  
  text("Score  " + score, width-300, 50);
  
  text(txt[0], width-450, 350);
  text(txt[0], width-375, 350);
  text(txt[0], width-300, 350);
  text(txt[1], width-225, 350);
  text(txt[2], width-125, 350);
  text(txt[2], width-50, 350);
  
  Engine.update(engine)
  


  g.display();
  for(var k=0; k<d.length; k++){
    d[k].display();
  }
  for(var j=0; j<pl.length; j++){
    pl[j].display();
  }
  //if(frameCount%60===0){
   // if(particleLimit != 0){
   // pa.push(new Particle(random(width/2-10, width/2+10), 10, 10));
    //particleLimit = particleLimit - 1;
   // }
  //}
  for(var m=0; m<pa.length; m++){
    pa[m].display();
  }
 score = 0;
  for(var iball =0; iball<pa.length; iball++){
    if(pa[iball].body.position.y > 350) {
      if(pa[iball].body.position.x < 240){
          score = score + 500;
      }else if(pa[iball].body.position.x > 325){
        score = score + 200;
      } else{
          score = score + 100; 
      }
    }
  }

}

function keyPressed(){
  if(keyCode === 32){
    if(particleLimit != 0){
      pa.push(new Particle(random(width/2-10, width/2+10), 10, 10));
      particleLimit = particleLimit - 1;
      }  
  }
}