//create a class for Hole
class Hole{
//create the constructor
constructor(x, y, r){
//declare behaviour 
var options = {
isStatic : true
};
//define behaviour 
this.x = x;
this.y = y;
this.r = r;
r = 45;
//create a body for each object
this.body = Matter.Bodies.circle(x, y, r, options);
//add each and every object into the World
World.add(world, this.body);
}

//function to display the objects
display(){
//set a suitable color for the outline
strokeWeight(this.r / 10);
//set a suitable color for the outline
stroke("black");
//set a suitable color of the object
fill("white");
//create a specific shpe's blueprint
ellipse(this.x, this.y, this.r);
}
}