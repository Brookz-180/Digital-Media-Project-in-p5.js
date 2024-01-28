let foodlist = [];
let fish;
let goldfish;
let chomp;
let foodsplash;
let fishfood;
let flakecontainer;
let flakeimg;
let frenzybutton;
let frenzytoggle = false;
let count = 0;
let colorlist = ["red","orange","yellow","green","blue","indigo","violet"];
let colorindex = 0;
let seaweed;
let on = false;

function preload() {
  //goldfish = loadImage("images/goldfish884x643.png");
  goldfish = loadImage("images/redgoldfish4000x3000.png");
  chomp = loadSound("sounds/chomp.wav");
  foodsplash = loadSound("sounds/foodsplash.ogg");
  fishfood = loadImage("images/fishfood.png");
  flakeimg = loadImage("images/foodcontainer.png");
  seaweed = loadImage("images/seaweed.png");
}

function setup() {
  createCanvas(600, 500);
  noCursor();
  //create fish
  fish = new Fish(300,300,goldfish);
  flakecontainer = new Container(mouseX,mouseY,flakeimg);
  frenzybutton = createButton("Toggle Feeding Frenzy");
  frenzybutton.mousePressed(frenzy);
}

function draw() {
  background(220);
  
  //draw aquarium edges
  fill("black");
  rect(0,50,20,420);
  rect(580,50,25,420);
  rect(0,470,600,30);
  fill("lightblue");
  noStroke();
  rect(20,140,560,330);
  //draw circles at top of water to simulate water effect
  fill(220);
  for (let i=38;i<580;i+=26) {
    ellipse(i,135,33);
  }
  //draw seaweed decoration
  image(seaweed,450,420,150,150);
  
  //fish movement  
  fish.show();
  fish.move();
  
  //fish flakes container
  flakecontainer.show();
  
  //make the fish find the earliest dropped food
  for (let i=foodlist.length-1;i>=0;i--) {
    fish.findfood(foodlist[i]);
  }
  
  //fish will eat the food
  for (let j=0;j<foodlist.length;j++) {
    if (fish.eat(foodlist[j])) {
      foodlist.splice(j,1);
    }
  }
  
  //food movement
  for (let i=0;i<foodlist.length;i++) {
    foodlist[i].show();
    foodlist[i].move();
  }
  
  //funny secret flying fish
  if (fish.y < 100) {
    textSize(32);
    fill("black");
    textStyle(BOLD);
    textAlign(CENTER,CENTER);
    text("OH MY GOD HE CAN FLY",300,40)
  }
  
  //startup screen
  if (on==false) {
    push();
    textSize(32);
    fill("black");
    textAlign(CENTER,CENTER);
    text("Click anywhere to feed the fish!",300,200);
    pop();
  }
  
  //add lots of food if the frenzy button is toggled on
  //  and create rainbow text at the top
  if (frenzytoggle == true) {
    textSize(32);
    fill(colorlist[colorindex]);
    textStyle(BOLD);
    textAlign(CENTER,CENTER);
    text("FEEDING FRENZY",300,40);
      if (count % 10 == 0) {
        foodlist.push(new Food(random(30,570),120));
        colorindex++;
      }
    //cycle through color list for text color
    if (colorindex > colorlist.length-1) {
      colorindex = 0;
    }
  }
  
  //count the number of times the draw loop happens
  count += 1;
  
  //position helper to find coordinates
  // textSize(12);
  // fill("black");
  // text([mouseX,mouseY],mouseX,mouseY);
}

//create food when mouse is clicked
function mouseClicked() {
  on=true;
  if (mouseY < 460) {
    foodlist.push(new Food(mouseX,mouseY+20));
  }
}

//feeding frenzy!!
function frenzy() {
  if (frenzytoggle == false) {
    frenzytoggle = true;
  } else {
    frenzytoggle = false;
  }
}