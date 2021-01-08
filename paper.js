class Paper{constructor(x,y,radius){
    var options={
        density:1.2,
        restitution:0.5
    }
    this.body=Bodies.circle(x,y,radius,options)
    this.radius=70
    this.paperball=loadImage("images/paper.png")
   Matter.World.add(world,this.body)
}
display(){
    imageMode(CENTER)
     image(this.paperball, this.body.position.x, this.body.position.y,50,50);
}
}
 