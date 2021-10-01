//create a class for Cannon3
class Cannon3{
//create the constructor
constructor(x, y, w, h){
//declare behaviour
const options = {
//define behaviour
isStatic : true
};
//define properties
this.x = x;
this.y = y;
this.w = w;
this.h = h;
this.isDestroyed = false;
//create  body for each object
this.body = Matter.Bodies.rectangle(x, y, w, h, options);
//add image to every object
this.image = loadImage("./media/Cannon3.jpg");
//add each and every object into World
World.add(world, this.body);
//set a specific angle for each and every object 
Matter.Body.setAngle(this.body, -PI / 2);
}
//function to display the objects
display(){
//declare a sample variable
var place = this.body.position;
//declare angle
var angle = this.body.angle;
//condition to change the angle to top side
if (keyIsDown(RIGHT_ARROW)){
//command to change the angle to left side
angle += 0.01;
//set a specific angle
Matter.Body.setAngle(this.body, angle);
}
//function to store new values
push();
//translate required values
translate(place.x, place.y);
//function to change the value of angle
rotate(angle);
//define imageMode
imageMode(CENTER);
//set the image at specific position
image(this.image, 0, 0, this.w, this.h);
//function to revert back to old settings
pop();
}
}