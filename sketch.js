// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
// remember to create an array of boxes.
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var boxes = [];
var gSlider;
var ground,particle
function setup() {
 createCanvas(400, 400);
// Create an instance of Engine, World
 engine = Engine.create();
 world = engine.world;
// A slider is already created for you here. This slider will dictate the gravity of the world
 gSlider = createSlider(0, 100, 50);
 gSlider.position(40, 365);
 gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
 particle =new Particle(200,340,10)
// Create a ground rectangle that would hold all the boxes and add it to the world.
 ground =new Ground(200,350,400,20)
 World.add(world,ground)
}
function mousePressed() {
 if (mouseY < 350) {
 // Every time a mouse press occures create a new box.
 boxes.push(Bodies.rectangle(mouseX,mouseY,20,30))
 World.add(world,boxes[boxes.length-1])

 }
}
function draw() {
    
    // Draw all the elements including the slider that 
    background(51);
    Engine.update(engine)
    ground.display()
particle.display()
    // This is the value of your gravity. You can optionally show it to the viewer.
    var fVal = gSlider.value();
 for(var i=0;i<boxes.length;i++){
     console.log("hi")
     console.log(boxes[i])
         rect(boxes[i].position.x,boxes[i].position.y,20,30)
 }
    // Use a for loop to show all the boxes

}
 

// You can either create a file for the class Box or build a simple function that creates one box at a time.
// I have gone for the second option.
function Box(x, y, w, h, options) {

    // add options such as friction and restitution. Experiment with the values
    var options = {

    }
 
    // create your box using the function arguments
    // x - x-coordinate
    // y - y-coordinate
    // w - width of the box
    // h - height of the box
    // Create a show method which will draw the box every time it is called inside the draw method.
    // remember to push and pop.
    this.show = function () {
    }
}