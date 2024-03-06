var pick;
var xImage = 100, yImage = 25;
var speedX, speedY;
var myFont;

var myTime = 10;

var pick2;
var xImage2 = 300, yImage2 = 25;

var pick3;
var xImage3 = 200, yImage3 = 25;

var points = 0;

var run1;
var run2;

var imageX1 = 300;
var imageY1 = 100;
var speedX, speedY;
var imageW1 = 256;
var imageH1 = 256;

var textX = 50;
var textY = 50;
var fontType;
var i = 0;
var time = 10;
var counter = 0;

var flipX = false;

var animations = [];

var objectToEat

var badobjectToEat

var walkArray = [];

var ii = 0;

var backgroundSound;

var goodSound;

var badSound;

function preload(){

    backgroundSound = loadSound("Sounds/BackgroundMusic.wav");
    goodSound = loadSound("Sounds/Success.ogg");
    badSound = loadSound("Sounds/Fail.mp3");
    
}
function mousePressed(){

backgroundSound.loop();

}

function setup()
{
    createCanvas(1600,1400);
    pick = loadImage("images/Pizza3.png");

    pick2 = loadImage("images/Pizza2.png");

    objectToEat = loadImage("images/Pizza.png")

    badobjectToEat = loadImage("images/Poison Mushroom.png")

    myFont = loadFont("fonts/ProtestRiot-Regular.ttf");
    speedX = random(1, 5);
    speedY = random(1, 5);

    speedX2 = random(1, 5);
    speedY2 = random(1, 5);

    speedX3 = random(1, 5);
    speedY3 = random(1, 5);

    setInterval(changeTime, 1000);

    setInterval(changeAnimation, 100);

    walkArray[0] = new Robot("./images/Run (1).png", 100, 250, 300, 200)
    walkArray[1] = new Robot("./images/Run (2).png", 100, 250, 300, 200)
    walkArray[2] = new Robot("./images/Run (3).png", 100, 250, 300, 200)
    walkArray[3] = new Robot("./images/Run (4).png", 100, 250, 300, 200)
    walkArray[4] = new Robot("./images/Run (5).png", 100, 250, 300, 200)
    walkArray[5] = new Robot("./images/Run (6).png", 100, 250, 300, 200)
    walkArray[6] = new Robot("./images/Run (7).png", 100, 250, 300, 200)

    objectToEat = new Robot("./images/Pizza.png", 100,200, 100, 100);

    badobjectToEat = new Robot("./images/Poison Mushroom.png", 100,400, 100, 100);
}

function draw()
{
    background(120);
    //image(pick, xImage,yImage);

    xImage += speedX;
    yImage += speedY;

    if(xImage >= width-100 || xImage <= 0)
    {
        speedX *=-1;
    }

    if(yImage >= height-100 || yImage <= 0)
    {
        speedY *=-1;
    }

    //image(pick2, xImage2,yImage2);

    xImage2 += speedX2;
    yImage2 += speedY2;

    if(xImage2 >= width-100 || xImage2 <= 0)
    {
        speedX2 *=-1;
    }

    if(yImage2 >= height-100 || yImage2 <= 0)
    {
        speedY2 *=-1;
    }

    //image(objectToEat, xImage3,yImage3);
    if(objectToEat != null)
   {
    objectToEat.draw();
 
   }

   if(badobjectToEat != null)
   {
    badobjectToEat.draw();

   }
    //xImage3 += speedX3;
    //yImage3 += speedY3;

    if(xImage3 >= width-100 || xImage3 <= 0)
    {
        speedX3 *=-1;
    }

    if(yImage3 >= height-100 || yImage3 <= 0)
    {
        speedY3 *=-1;
    }

    fill(100, 252, 169);
    textSize(24);
    textFont(myFont);
    text("Garrett Boehm", 400, 300);



    fill(36,250,100);
    textSize(15);

    text(myTime + " seconds", 50, 50);
   
    if(keyIsPressed)
    {
        if(key == "a")
        {
            flipX = true;
            imageX1 -=2;
        }

        if(key == "d")
        {
            flipX = false;
            imageX1 +=2;
        }
        if(key == "w")
        {
            imageY1 -=2;
        }
        if(key == "s")
        {
            imageY1 +=2;
        }
        walkArray[i].draw();
        for(var j = 0; j < walkArray.length; j++)
        {
            walkArray[j].y = imageY1;
            walkArray[j].x = imageX1;
            walkArray[j].updateFlip(flipX);
        }
        if (objectToEat != null){
            if(walkArray[i].checkCollision(objectToEat.x, objectToEat.y, objectToEat.w, objectToEat.h)){
               
                objectToEat = null;
                points++;
                goodSound.play();
            }
        
        }
        if (badobjectToEat != null){
            if(walkArray[i].checkCollision(badobjectToEat.x, badobjectToEat.y, badobjectToEat.w, badobjectToEat.h)){

                badobjectToEat = null;
                badSound.play();
            }
        }
    }
    else
    {
        walkArray[i].draw();
    }
fill(100, 252, 169);
textSize(24);
textFont(myFont);
text("Score:" + points, 350, 50);

}
function changeTime()

{
    myTime--;
    if(myTime < 0)
    {
        // reset
        myTime = 10;
    }
    //myTime -= 1;
    //myTime = myTime - 1;
}

function changeAnimation()

{
    i++;
    if(i > walkArray.length-1)
    {
        // reset
        i = 0;
    }

}

function moveEnemy()
  {
    if(counter >= 2)
    {
        if(imageX1 >= imageX2)
        {
            imageX1-=1;
        }
        if(imageY1 >= imageY2)
        {
            imageY1-=1;
        }

        if(imageX1 <= imageX2)
        {
            imageX1+=1;
        }
        if(imageY1 <= imageY2)
        {
            imageY1+=1;
        }
        counter = 0;
    }
   
    
    counter++;
  
}

