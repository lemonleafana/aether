//define all my variables
var a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20, a21, a22, a23, a24, a25;
var running;
var aether;
var bgImg, bg;
var enemy, cryo, hydro, pyro;
var score;
var invisbleground;
var gs;
var oops; 
var go;

function preload(){
    a1 = loadImage("image (1).png");
    a2 = loadImage("image (2).png");
    a3 = loadImage("image (3).png");
    a4 = loadImage("image (4).png");
    a5 = loadImage("image (5).png");
    a6 = loadImage("image (6).png");
    a7 = loadImage("image (7).png");
    a8 = loadImage("image (8).png");
    a9 = loadImage("image (9).png"); 
    a10 = loadImage("image (10).png");
    a11 = loadImage("image (11).png");
    a12 = loadImage("image (12).png");
    a13 = loadImage("image (13).png");
    a14 = loadImage("image (14).png");
    a15 = loadImage("image (15).png");
    a16 = loadImage("image (16).png");
    a17 = loadImage("image (17).png");
    a18 = loadImage("image (18).png");
    a19 = loadImage("image (19).png");
    a20 = loadImage("image (20).png");
    a21 = loadImage("image (21).png");
    a22 = loadImage("image (22).png");
    a23 = loadImage("image (23).png");
    a24 = loadImage("image (24).png");
    a25 = loadImage("image (25).png");
    goImg = loadImage("go.png");

    enemy = loadImage("ebemy.png");
    cryo = loadImage("cryomage.png");
    hydro = loadImage("hydro.png");
    pyro = loadImage("pyro.png");
   
    running = loadAnimation(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20, a21, a22, a23, a24, a25);
    
    bgImg = loadImage("bg.png");
}

function setup() {
    createCanvas(1500, 500);

    bg = createSprite(720, 250);
    bg.addAnimation("bg", bgImg);
    bg.scale = 0.75;

    aether = createSprite(150, 370, 0, 20);
    aether.addAnimation("running", running);
    aether.scale = 1;

    go = createSprite(750, 250);
    go.addAnimation("goImg", goImg);
    go.visible= false;
    go.scale =0.05;

    score = 0;

    invisibleGround = createSprite(200,455,3000,10);
    invisibleGround.visible = false;

    oops = new Group();
}

function draw() {
    background(51);

    gm = 1;


    if(gm === 1){
    score = score + Math.round(getFrameRate()/60);
    text("Score: "+ score, 500,50);
   // console.log(aether.y);
    if(keyDown("space") && aether.y >= 320) {
        aether.velocityY = -12;
        if(keyDown("space") && aether.y >=   100){
            aether.velocityY = -12;
        }
      }

   
    aether.velocityY = aether.velocityY + 0.8

    aether.collide(invisibleGround);


    //i like to move it, move it. the background, i mean. 
    bg.velocityX = -(6 + 3*score/100);

    if (bg.x < 50){
        bg.x = bg.width/4;
      }

    obstacles();

    if(oops.isTouching(aether)){
        gs = 0;
    } 

    else if(gs === 0){
        bg.velocityX = 0;
        aether.velocityX = 0;
        oops.setVelocityXEach(0);
        go.visible = true;
    }
}

    drawSprites();
}


function obstacles(){

    count =[30, 40, 50, 60, 70, 80];
   // console.log(random(count));

    if(frameCount%70 === 0){
        var oop = createSprite(Math.round(random(1420, 1460)),420, 20, 20);
              
        var rand = Math.round(random(1,4))
        switch(rand){
            case 1: oop.addAnimation("electro", enemy);
                    oop.scale = 0.25;
                    break;
            case 2: oop.addAnimation("cryo", cryo);
                    oop.scale = 0.20;
                    break;
            case 3: oop.addAnimation("hydro", hydro);
                    oop.scale = 0.20;
                    break; 
            case 4: oop.addAnimation("pyro", pyro);
                    oop.scale = 0.20;
                    break;
            default: break;
        }

        oop.velocityX = -(6 + 3*score/100);
        oops.add(oop);
    }
}