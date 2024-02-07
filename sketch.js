var tony
var sun
var dre
var drems=[]
var gordy
var oot=0
var gamstoot=0
var score=0
var scoreFin=0
var form
var start=false
var hScore=0
var hName=''
var user=form.input.value()

function preload(){
    dreImg=loadImage("images/dreSword.png")
    tonyImg=loadImage("images/tony.png");
    bgImg=loadImage("images/bg.png")
    sunImg=loadImage("images/sun.PNG")
    dedImg=loadImage("images/ded.png")
    gordImg=loadImage("images/Gordon-Brown.jpg")
    clayImg=loadImage("images/clay.png")
    yeImg=loadImage('images/ye.jpg')
    dogImg=loadImage('images/dog.png')
    quagImg=loadImage('images/quag.png')
    nigelImg=loadImage('images/neegil.jpg')
    bullImg=loadImage('images/bull g.png')
    jerImg=loadImage('images/jer.jpg')
    goImg=loadImage('images/go.png')

    //speed=loadSound('sounds/speed.mp3')
}
function setup(){
  createCanvas(windowWidth,windowHeight);
  edges=createEdgeSprites();

  frameRate(30)

  // sun = createSprite(990,120,40,40);
  // sun.addImage(sunImg);
  // sun.scale=0.65;
  // sun.setCollider('rectangle',0,0,100,100);

  tony = createSprite(300,300,10,10);
  tony.addImage(tonyImg);
  tony.scale=0.4;
  

  bull = createSprite(0,0,10,10);
  bull.addImage(bullImg);
  bull.scale=0.12 ;
  bull.visible=false;
 

// input = createInput("").attribute("placeholder", "Enter your name");
// playButton = createButton("Play");

// greeting = createElement("h2");
   database = firebase.database();
   form = new Form();
    form.display();
}



function draw(){
  //console.log('user ',user)
  console.log('gang',form.ganggang)

  //oot = round(random(0,50))
  //rotate(90)

  database.ref("High").on("value", data => {
    hScore = data.val();
  });

  database.ref("Username").on("value", data => {
    hName = data.val();
  });




//start=true

  //sun.debug=true
  //gordy.debug=true
  //bull.debug=true

  if(start==true){
  bull.setCollider('rectangle',0,0,700,270)
  //sun.setCollider('circle',0,15,90)
  tony.setCollider('rectangle',0,30,190,370)


  if(gamstoot===0){
    background(bgImg);

    

    textSize(20)
    text("Session High: "+scoreFin,windowWidth/2+200,40);
  
    textSize(20)
    text("World High Score: "+hScore,windowWidth/2-600,80);
  
    textSize(20)
    text("World High Score Holder: "+hName,windowWidth/2-600,40)

    textSize(20)
    text("Score: "+score,windowWidth/2-50,40)

    //sun.visible=true
    tony.visible=true
    //gordy.visible=true
    drems.visible=true
    
    
    spawnDre()


  }

  //touch dream
  if(gamstoot===1){
    //if(oot===0){
      background(clayImg)
      if(score>scoreFin){
      scoreFin=score
      }

    if(scoreFin>hScore){
      database.ref("/").update({
        High: scoreFin,
      });
      database.ref("/").update({
        Username: str(form.ganggang),
      });
    }

      textSize(20)
      text("Session High: "+scoreFin,windowWidth/2+200,40);
    
      textSize(20)
      text("World High Score: "+hScore,windowWidth/2-600,80);
    
      textSize(20)
      text("World High Score Holder: "+hName,windowWidth/2-600,40)

      textSize(50)
      text("R to restart",windowWidth/2-140,100);

      textSize(20)
      text("Score: "+score,windowWidth/2-50,40)

      if(keyDown('R')){
        gamstoot=0;
        bull.x=0;
        bull.y=0;
        bull.visible=false;
        bull.velocityX=0;
        score=0
        tony.addImage(tonyImg);
        
      }
   // }

    //sun.visible=false
    tony.visible=false

    dre.visible=false
    bull.visible=false

    
  }




  if(bull.x>=window.width-20){
    bull.x=0
    bull.y=0
    bull.visible=false
    bull.velocityX=0
  }


  //bull.debug=true

    if(keyDown("W")&&tony.y>70){
        tony.y+=-16
      }
      if(keyDown("S")&&tony.y<windowHeight-100){
        tony.y+=16
      }
      if(keyDown("A")&&tony.x>30){
        tony.x+=-16
      }
      if(keyDown("D")&&tony.x<windowWidth-50){
        tony.x+=16
      }
      if(keyDown("SPACE")){

          if(bull.x===0){
        bull.x=tony.x+50
        bull.y=tony.y+50
        bull.velocityX=24
        bull.visible=true


        }

      }

      for(i=0;i<drems.length;i++){
      if(bull.isTouching(drems[i])){
        drems[i].destroy()
        score+=1
        bull.visible=false
        bull.x=0
        bull.y=0
        bull.velocityX=0
      }
    }

      if(tony.isTouching(drems)){
        gamstoot=1
      }
      



    drawSprites()
}}

function spawnDre(){
  if(frameCount%30===0){
    dre = createSprite(windowWidth,round(random(100,windowHeight-100),10,10));
    dre.addImage(dreImg);
    dre.scale=0.34
    dre.velocityX=-75
    dre.setCollider('circle',0,0,260)

    drems.push(dre);

  }


}

// if space pressed:
//     if space pressed:
    
//     else:
//       fire bullet :)