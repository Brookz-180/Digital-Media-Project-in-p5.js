class Container {
  constructor(x,y,img) {
    this.x = x;
    this.y = y;
    this.img = img;
  }
  
  show() {
    push();
    angleMode(DEGREES);
    translate(mouseX,mouseY);
    rotate(180);
    imageMode(CENTER);
    image(this.img,0,0,40,70);
    pop();
  }
}