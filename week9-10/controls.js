var mouse = true

function clicked(GameObject)
{
    {
    if(GameObject.target(mouse) && mouse.pressed == true)
        {
            return true
            
        }
        return false;
        
    }

       
}
function clicked(GameObject)
{
    {
    if(GameObject.faketarget(mouse) && mouse.pressed == true)
        {
            return true
        }
        return false;

    }

}
