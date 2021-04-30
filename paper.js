class Paper{
    constructor(x,y,width,height){
        var options = {
             'isStatic':false,
            'restitution':0.3,
            'friction':0.8,
            'density':1.9
        }
        this.width=30
        this.height=30
        this.body = Bodies.rectangle(x, y,50,50, options);
       World.add(world,this.body);
      }
      display(){
        push()
        fill("red");
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,50,50)
        pop()
    }   
  }