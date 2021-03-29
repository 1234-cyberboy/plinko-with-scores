class Plinkos {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.r = 10;
      this.body = Bodies.circle(x,y,this.r,options);
      
      World.add(world, this.body);
    }
    
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("black");
      circle(pos.x, pos.y, this.r);
    }
  };