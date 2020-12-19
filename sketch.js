var hr,min,sec;

function setup() {
  createCanvas(2000,1000);
 // createSprite(100, 200, 50, 50);
 
}

function draw() {
  background(255,255,255);  
  drawSprites();
   hr = hour();
  min = minute();
  sec = second();
  angleMode(DEGREES);
  ScAngle= map(sec,0,60,0,360);
  MnAngle= map(min,0,60,0,360);
  HrAngle= map(hr%12,0,60,0,360); 

  push();
  translate(200,200);
    rotate(ScAngle);
  stroke(255,0,0);
strokeWeight(7);
line(0,0,100,0);

pop();

push();
translate(200,200);
rotate(MnAngle);
stroke(0,255,0);
strokeWeight(7);
line(0,0,110,0);

pop();

push();
translate(200,200);
rotate(HrAngle);
stroke(0,0,255);
strokeWeight(7);
line(0,0,120,00);

pop();

noFill();
stroke(255,0,0);
strokeWeight(7);
arc(200, 200, 200,200, -90,ScAngle);
stroke(0,255,0);
strokeWeight(7);
arc(200, 200, 220,220, -90,MnAngle);
stroke(0,0,255);
strokeWeight(7);
arc(200, 200, 240,240, -90,HrAngle);
}