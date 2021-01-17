//Create variable
var database;
var dog,dogHappy1,dogHappy;
var FoodS, foodStock;


function preload()
{
dogHappy1 = loadImage("images/dogImg1.png");
dogNotSoHappy = loadImage("images/dogImg.png");
}

function setup() {
  database = firebase.database();
  createCanvas(750,500);
  
  dog = createSprite(250,250);
  dog.addImage(dogNotSoHappy,"images/dogImg.png");
  dog.scale = 0.5;

  
foodStock = database.ref('Food');
foodStock.on("value",readStock);
console.log(foodStock);
}


function draw() {  
background(46, 139, 87);

if(keyWentDown(UP_ARROW)){
  writeStock(FoodS);
  dog.addImage(dogHappy);
  Food = Food-1;
}

  drawSprites();
  textSize(20);
  fill("white");
  text("Press Up Arrow to Feed him Milk!",300,100)

  textSize(20);
  fill("white");
text("Food Remaining :" + foodStock.writeStock,300,200);
}

function readStock(data){
foodS = data.val();

}

function writeStock(x){
  if(FoodS<-0){
    x-0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food : x
  })
}

function update(){
  database.ref('/').update({
  Food : foodStock
  })
}