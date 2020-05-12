class Box {
  constructor(x,y,width,height) {
      
  this.body = Bodies.rectangle(x,y,width,height);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    strokeWeight(0);
    rectMode(CENTER);
    fill("pink");
    rect(pos.x, pos.y, this.width, this.height);
    
  }
};