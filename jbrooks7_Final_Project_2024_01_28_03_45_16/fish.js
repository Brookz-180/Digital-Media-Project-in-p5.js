class Fish {
  constructor(x,y,img) {
    this.x = x;
    this.y = y;
    this.img = img;
    this.xspeed = 0;
    this.yspeed = 0;
    this.dir = 0;
  }
  
  move() {
    this.x += this.xspeed;
    this.y += this.yspeed;
    if (this.y < 150) {
      this.y += 1;
    }
  }
  
  findfood(other) {
    if (other.x < this.x + 50 && other.x > this.x - 50) {
      this.xspeed = 0;
    } else if (this.x < other.x) {
        this.xspeed = 4;
        this.dir = 1;
      } else if (this.x > other.x) {
        this.xspeed = -4;
        this.dir = 0;
      }
    if (other.y < this.y + 20 && other.y > this.y - 20) {  
      this.yspeed = 0;
    } else if (this.y < other.y) {
        this.yspeed = 2;
      } else if (this.y > other.y) {
        this.yspeed = -2;
      }
    }
  
  eat(other) {
    if (other.x < this.x + 50 && other.x > this.x - 50 && other.y < this.y + 20 && other.y > this.y - 20) {
      chomp.play();
      return true;
    } else {
      return false;
    }
  }
  
  show() {
    noStroke();
    imageMode(CENTER);
    if (this.xspeed < 0) {
      image(this.img, this.x, this.y, 133, 100);
    }
    if (this.xspeed > 0) {
      push();
      //translate(this.x,this.y);
      scale(-1,1);
      image(this.img,-this.x,this.y,133,100);
      pop();
    }
    if (this.xspeed == 0) {
      if (this.dir == 0) {
        image(this.img,this.x,this.y,133,100);
      } else if (this.dir == 1) {
        push();
        scale(-1,1);
        image(this.img,-this.x,this.y,133,100);
        pop();
      }
    }
    if (this.y < 150) {
      push();
      translate(this.x,this.y);
      rotate(PI/2);
      //image(this.img,this.x,this.y,133,100);
      pop();
    }
  }
}