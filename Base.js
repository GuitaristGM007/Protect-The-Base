//create a class for Base
class Base{
//create the constructor
constructor(x, y, w, h){
//declare behaviour 
var options = {
isStatic : true
};
//define properties
this.x = x;
this.y = y;
this.w = w;
this.h = h;
//create a body for the object
this.body = Matter.Bodies.rectangle(x, y, w, h, options);
//add image to the object
this.image = loadImage("./media/Base.gif");
//add the object to the World
World.add(world, this.body);
}
//function to display the object
display(){
//declare a sample variable
var place = this.body.position;
//declae the angle
var angle = this.body.angle;
//function to store new values
push();
//translate the required values
translate(place.x, place.y);
//command to change the value of angle
rotate(angle);
//define imageMode
imageMode(CENTER);
//assign a particular image
image(this.image, 0, 0, this.w, this.h);
//function to revert back to old settings
pop();
}
}