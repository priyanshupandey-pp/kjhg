class Dustbin{
    constructor(x,y,width,height){
    
    var options = {
        'isStatic':true,
        'dencity':1.3,
        'friction':2,
        'restitution':1,
       
    }
    this.body = Bodies.rectangle(x,y,50,150, options);
    this.width = width;
    this.height =height ; 
}
display(){
    var pos =this.body.position;
   
    rectMode(CENTER);
    fill("green");
    rect(390,610,100,10);
    rectMode(CENTER);
    rect(this.body.position.x,this.body.position.y,50,150,{isStatic:true})
  }
}