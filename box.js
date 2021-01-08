class Box{
    constructor(x,y){
        this.bottom=Bodies.rectangle(x,y,200,20,{isStatic:true})
        this.left=Bodies.rectangle(x-100,y-40,20,100,{isStatic:true})
        this.right=Bodies.rectangle(x+100,y-40,20,100,{isStatic:true})
    World.add(world,this.bottom)
    World.add(world,this.left)
    World.add(world,this.right)
    }
    display(){
       
        push();
        translate(this.bottom.position.x, this.bottom.position.y);
        rotate(this.bottom.angle);
        rectMode(CENTER);
        rect( 0, 0, 200 ,20);
        pop();

        push();
        translate(this.left.position.x, this.left.position.y);
        rotate(this.left.angle);
        rectMode(CENTER);
        rect( 0, 0, 20 ,100);
        pop();

        push();
        translate(this.right.position.x, this.right.position.y);
        rotate(this.right.angle);
        rectMode(CENTER);
        rect( 0, 0, 20 ,100);
        rect( 0, 0, 20 ,100);
        pop();
      }
} 