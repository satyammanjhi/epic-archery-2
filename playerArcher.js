class PlayerArcher {
    constructor(x, y, width, height, angle) {
      var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,
        isStatic: true
      };
      this.width = width;
      this.height = height;
      this.angle=angle;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      this.image = loadImage("playerArcher.png");
      World.add(world, this.body);
    }
  
   display() {
      var pos = this.body.position;
      var angle = this.body.angle;
  
      if (keyIsDown(DOWN_ARROW) && this.angle < -1.01) {
        this.angle += 0.03;
      }
  
      if (keyIsDown(UP_ARROW) && this.angle > -1.75) {
        this.angle -= 0.03;
      }
  
      push();
      translate(pos.x, pos.y);
      rotate(this.angle);
      imageMode(CENTER);
      image(this.image,0, 0, this.width, this.height);
      pop();
      
    }
  }
  