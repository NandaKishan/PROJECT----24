class Paper{
    constructor(x,y){
        var options = {
        isStatic : false,
        restitution : 0.3,
        friction : 0.5,
        density : 1.2
        }
        this.body = Bodies.circle(x,y,40,options);
        this.radius = 40;
        World.add(world,this.body);
    }

    display(){
        push();
        var pos = this.body.position;
        var angle = this.body.angle;
        translate(pos.x,pos.y);
        rotate(angle);
        fill("pink");
        strokeWeight(3);
        stroke("blue");
        ellipseMode(CENTER);
        ellipse(0,0,this.radius);
        pop();
    } 
}