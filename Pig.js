class Pig extends BaseClass {
  constructor(x, y){

    super(x,y,50,50); // constructor of baseClass
    this.image = loadImage("sprites/enemy.png");
    // completely visible
    this.visibility = 255;

  }

  display(){
    // continuous change we can see if we call it in function draw()

    console.log(this.body.speed);

    // condition to make the pig appear
    if(this.body.speed<3){
      super.display(); // calls function display() of baseClass
    }else{

      World.remove(world, this.body);
push (); // adding settings
 // reduce the visibility by 5 everytime to give vanishing effect
      this.visibility = this.visibility -5;
     

      tint(255, this.visibility); // from 255 to this.visibility 
    }
pop (); // restore original settings
  }

};