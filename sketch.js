var dog 
var happyDog
var database 
var foodS 
var foodStock
var database

function preload(){
dogImage = loadImage("Dog.png");
happyDogImage = loadImage("happydog.png");
}

function setup(){
createCanvas(500,500);
database = firebase.database();
dog = createSprite(250,250,50,50);
dog.addImage(dogImage);
foodStock = database.ref('Food');
    foodStock.on("value",readStock);
dog.scale = 0.25
}

function draw(){
background(46,139,87);
if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImage);
}
drawSprites();
textSize(30);
fill("black")
text("Food Remaining: "+foodS,100,50)
textSize(15);
fill("light_blue");
text("Press Up Arrow to Feed the Dog!",135,425);
}

function readStock(data){
foodS = data.val();
}

function writeStock(x){
if(x<=0){
    x = 0
}
else{
    x = x-1
}
database.ref('/').update({
    Food : x
})
}

