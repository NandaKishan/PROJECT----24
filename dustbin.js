class Dustbin {
    constructor(x,y,width,height){
            var options = {
            isStatic : true 
        }
        
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }

    display(){
        push();
        var pos = this.body.position;
        var angle = this.body.angle;
        rotate(angle);
        translate(pos.x,pos.y);
        fill("red");
        strokeWeight(4);
        stroke("blue");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}