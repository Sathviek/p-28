class Stone{
constructor(){
    var options={
        isStatic:false,
        restitution:0,
        friction:1,
        density:1.2
    }
} 
function keypressed( {
    if(KeyCode === 32) {
        MutationObserver.Body.setPosition(stoneObj.body,{x:235, y:420})
        launcherObject.attach(stoneObj.body);
    }
})
}