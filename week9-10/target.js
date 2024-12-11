class GameObject
{
    constructor(_id='target')
    {     
    /*Object properties (or attributes)*/
    //object position
     
     
    
     this.x=math.floor(math.random(-100) * 100);
     this.y=math.floor(math.random(-100) * 100);
    
     
     this.radius=8;
   
    //object color
     this.color = `green`
   

    }

    //Draws a rectangle 
    render()
    {
        ctx.save();
            ctx.fillStyle = this.color
            ctx.translate(this.radius+world.radius)
            ctx.rotate(this.angle*Math.PI/360)
            ctx.fillRect(this.radius);
    }

    addEventListener(mousepressed, )
}