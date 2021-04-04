class SlingShot {
    
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.4,

            //length/distance between the two objects when they are not moving
            length:10
        }
        this.sling = Constraint.create(options);
        this.pointB=pointB;
        World.add(world,this.sling);
        
    }
    fly(){
        this.sling.bodyA=null;
    }

    display(){

        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;//bird
        var pointB = this.pointB;//log6
    
        push();
        //line(x1,y1,x2,y2);
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
        }
    }

}