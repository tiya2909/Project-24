
class Paper { constructor(){
     var options={ 
     isStatic:false, 
     restitution:0.3, 
     friction:0.5,
     density:1.0 }


       this.body=Bodies.circle(100,600,30,options);
       this.radius=30;
        World.add(world,this.body);
     } 
  
  display(){
  var pos = this.body.position;
     fill("pink");
     ellipseMode(CENTER); 
    ellipse(pos.x,pos.y,this.radius,this.radius);
 } 
}