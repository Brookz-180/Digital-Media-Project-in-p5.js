class Food {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.xspeed = 0;
    this.yspeed = 3;
    this.xspeedwater = 0;
    this.yspeedwater = 1;
  }
  
  move() {
    if (this.x > 20 && this.x < 580 && this.y < 145) {
      this.y = this.y + this.yspeed;
    } else if (this.x > 20 && this.x < 580 && this.y >= 145) {
      this.y = this.y + this.yspeedwater;
    }
    if (this.x > 20 && this.x < 580 && this.y >= 470) {
      this.yspeed = 0;
      this.y = 470;
    }
    if (this.y == 150) {
      foodsplash.play();
    }
  }
  
  show() {
    noStroke();
    imageMode(CENTER);
    image(fishfood,this.x,this.y,30,25);
    //fill("green");
    //ellipse(this.x,this.y,20);
  }
  
}