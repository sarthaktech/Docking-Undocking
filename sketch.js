var iss,sc
var hasDock= false




function preload(){
  issIMG=loadImage("image/iss.png")
  bg=loadImage("image/spacebg.jpg")
  scN=loadImage("image/spacecraft1.png")
  scF=loadImage("image/spacecraft2.png")
  scL=loadImage("image/spacecraft3.png")
  scR=loadImage("image/spacecraft4.png")
}

function setup() {
  createCanvas(1000,600);
  iss=createSprite(500,300);
  iss.addImage(issIMG)
  iss.scale=1
  
  sc=createSprite(500,397)
  sc.addImage(scN)
  sc.scale=0.25
  sc.debug=false
  sc.setCollider("rectangle",0,-180,50,50,0)
  
  Iiss=createSprite(435,325,30,30)
  Iiss.visible=false
}


function draw() {
  background(bg); 
  
  
if(!hasDock){
  sc.x=sc.x+random(-1,1)
  if(keyWentDown(UP_ARROW)){
    sc.addImage(scF)
    sc.y+=-2
  }
  if(keyWentDown(DOWN_ARROW)){
    sc.addImage(scN)
    sc.y+=2
  }
  if(keyWentDown(RIGHT_ARROW)){
    sc.addImage(scR)
    sc.x+=2
  }
  if(keyWentDown(LEFT_ARROW)){
    sc.addImage(scL)
    sc.x+=-2
  }
}
if(sc.isTouching(Iiss)){
  sc.velocityX=0
  sc.velocityY=0
  fill("red")
  textSize(25)
  text("DOCKING SUCCESSFUL!",400,550)
}

  drawSprites();
}