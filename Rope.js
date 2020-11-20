class Rope{
    constructor(bodyA, pointB, options){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 40
            //isStatic: true
        }
        
        this.pointB = pointB
        this.bodyA = bodyA
        //this.bodyA = Constraint.create(options);
        //World.add(world, this.body);
        //this.body = Constraint.create(options);
        //World.add(world, this.body);
        //World.add(world, this.body)
    }

    display(){
        
        fill("white")

        /*if(this.body.bodyA){*/
            var pointA = this.bodyA.position;
            var pointB = this.pointB;
            push();
            
            /*stroke(48,22,8);
            if(pointA.x < 220) {*/
                strokeWeight(7);
                line(pointA.x, pointA.y, pointB.x, pointB.y);
                //line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
                
            /*}
            else{
                strokeWeight(3);
                line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
                
            }*/
           
            
            pop();
        }
    //}
    
}