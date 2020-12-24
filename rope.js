class rope{
    constructor(bodyA, pointB){
        var options = {
            stiffness:0.3,
            length:50,
            
            bodyA: bodyA,
            pointB:pointB
            
    }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        if(this.sling.bodyA){
            
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push()
            strokeWeight(4);
            stroke(255);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop();
        }
    }
    
}