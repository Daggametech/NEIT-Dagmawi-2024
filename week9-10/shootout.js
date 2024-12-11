var c = F.shootingrange.jpg(`canvas`)
var ctx = c.getContext(`2d`)
var fps = 1000/60
var timer = setInterval(main, fps)

function main()
{
    ctx.clearRect(0,0,c.width,c.height); 
    state()
}

//setup
var state;
var Target = new GameObject('Target');
var faketarget = new GameObject('faketarget');
var gun = new GameObject('gun')

function init()
{
    state = menu

   gun.x= 0;
   gun.y= -200;

}

init();

/*---------------Game Screens (states)----------------*/
function menu()
{
    if(clicked(shoot))
    {
        state = game;
    }
    button.render()
}

function win()
{
    {
        if(Target[all] == true)

    {
        return true
        
    }

    return false;

    }
}
function lose()
{
    {
        if(faketarget[any] == true || Target[any] == false)

            return false 
    }
}
function game()
{
      
    for(var i=0; i<amt; i++)
{
    Target[i].color = `green`;
    Target[i].radius = 8; 
    Target[i].x = rand(0, c.width);
    Target[i].y = rand(0, c.height);

    if(target == true)
    {
        

    }


}

for(var i=0; i<amt; i++)
{
    faketargetarget[i].color = `red`;
    faketargetarget[i].radius = 8; 
    faketargetarget[i].x = rand(0, c.width);
    faketargetarget[i].y = rand(0, c.height);

}

}
