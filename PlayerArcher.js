class PlayerArcher{
    constructor(x,y,w,h){
        var option = {
            iStatic:true
        }

        this.body = Bodies.reactangle(x,y,w,h,option)
        World.add(world,this.body)
        this.height = h
        this.width = w
        this.image = loadImage("assets/playerArcher.png")
        Matter.Body.setAngle(this.body,-PI/2)
    }

    display(){

        var pos = this.body.position
        var angle = this.body.angle

        if(keyIsDown(DOWN_ARROW) && angle<-1.2){
            angle = angle+0.01
            Matter.Body.setAngle(this.body,angle)

        }

        if(keyIsDown(UP_ARROW) && angle<-1.9){
            angle = angle-0.01
            Matter.Body.setAngle(this.body,angle)

        }
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height)
        pop()
    }

}